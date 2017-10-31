import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../service/user-data.service';
import { UserType } from '../../util/user-type';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css'],
  providers: [UserDataService]
})
export class ListUserComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  userData: UserType[];

  constructor(private _UserDataService: UserDataService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
    this.userData = this._UserDataService.getData();
  }

}
