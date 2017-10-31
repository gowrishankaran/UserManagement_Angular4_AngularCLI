import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [
	{
		path: '',
	    component : UserComponent,
	    children : [
	        {
	            path : '',
	            component : AddUserComponent
	        },
			{
				path: 'addUser',
			    component : AddUserComponent
			},
			{
				path: 'listUser',
			    component : ListUserComponent
			}

	    ]
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
