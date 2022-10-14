import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User, UsersService } from '../users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent implements OnInit {

  userForm = new FormGroup({
    firstname: new FormControl<string>('Emil',
      [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    lastname: new FormControl<string>('Karlen',
      [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    age: new FormControl<number>(35),
    email: new FormControl<string>('emil.karlen@example.com',
      [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
  });

  // Form  without FromGroup:
  firstname2 = new FormControl<string>('Emil');
  lastname2 = new FormControl<string>('Karlen');

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.firstname2.setValue('Emilia'); // example
  }

  save() {
    const user = {
      ...this.userService.getInitUser(),
      ...this.userForm.value,
    } as User;
    this.userService.saveUser(user);
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
