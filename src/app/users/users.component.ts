import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersComponent implements OnInit {

  public users$: Observable<User[]>;

  constructor(private userService: UsersService) {
    this.users$ = this.userService.getUsers();
  }

  ngOnInit(): void {
  }

}
