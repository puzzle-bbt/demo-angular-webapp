import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  {
    path: '', component: UsersComponent,
    children: [
      { path: 'detail/:id', component: UserDetailComponent },
      // { path: 'form/:id', component: UserFormComponent },
    ]
  },
  // { path: 'detail/:id', component: UserDetailComponent },
  { path: 'form/:id', component: UserFormComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
