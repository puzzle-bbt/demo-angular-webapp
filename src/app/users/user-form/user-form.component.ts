import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User, UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, of, switchMap } from 'rxjs';
import { getNumberOrNull } from '../core/common';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent implements OnInit {
  user$!: Observable<User>;

  userForm = new FormGroup({
    firstname: new FormControl<string>('',
      [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    lastname: new FormControl<string>('',
      [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    age: new FormControl<number>(0),
    email: new FormControl<string>('',
      [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
  });

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    // get User
    this.user$ = this.route.paramMap.pipe(
      switchMap(params => {
        const userId = getNumberOrNull(params.get('id'));
        if (userId) {
          return this.userService.getUser(userId);
        } else {
          return of<User>(this.userService.getInitUser());
        }
      })
    );

    // update FormGroup
    this.user$.subscribe(user => {
      const {id, ...restUser} = user;
      this.userForm.setValue(restUser);
    });
  }

  save() {
    this.user$.pipe(
      map(user => {
        return {
          ...user,
          ...this.userForm.value,
        } as User;
      })
    ).subscribe(user =>
      this.userService.saveUser(user).subscribe({
        next: () => this.router.navigate(['/users']),
        error: () => {
          console.log('Can not save this user: ', user);
          // TODO: put a message to the user or throw a error
          return new Error('ups sommething happend');
        }
      })
    );
  }

  patchValueToTheodor() {
    this.userForm.patchValue({
      firstname: 'Theodor',
      email: 'theodor.mueller@example.com'
    });
  }

  setValueToFritz() {
    this.userForm.setValue({
      firstname: 'Fritz',
      lastname: 'Müller',
      age: 55,
      email: 'karl.mueller@example.com',
    });
  }
}
