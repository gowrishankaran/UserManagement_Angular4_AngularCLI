import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';

import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { UserComponent } from './user.component';
import { ListUserComponent } from './list-user/list-user.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingModule,
    FormsModule,
    NgbModule,
    DataTablesModule
  ],
  declarations: [AddUserComponent, UserComponent, ListUserComponent]
})
export default class UserModule { }
