import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User, UsersService } from '../users.service';
import { Observable, Subject, switchMap } from 'rxjs';
import { getNumberOrNull } from '../core/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailComponent {

  user$: Observable<User> = new Subject<User>();

  constructor(private userService: UsersService, private route: ActivatedRoute) {
    this.user$ = this.route.paramMap.pipe(
      switchMap(paramMap => {
        const userId = getNumberOrNull(paramMap.get('id'))
        if (userId) {
          return this.userService.getUser(userId);
        } else {
          // TODO error case: maybe show info and go to user list
          throw new Error('User id don\'t exists');
        }
      })
    );
  }
}
