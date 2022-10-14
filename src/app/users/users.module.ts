import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersComponent,
    UserDetailComponent,
    UserFormComponent
  ],
  providers: [
    UsersService
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
