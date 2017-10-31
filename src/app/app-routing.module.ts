import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
	{
		path:'', loadChildren : './login/login.module'
	},
	{
		path:'dashboard', component: DashboardComponent
	},
	{
		path:'user', loadChildren : './user/user.module'
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
