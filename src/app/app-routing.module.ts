import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LinechartComponent} from "./chart/linechart/linechart.component";

const routes: Routes = [{
  path: 'diagrams',
component: LinechartComponent}, {
  path: 'users',
  loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
