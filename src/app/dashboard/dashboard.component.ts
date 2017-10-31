import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../service/user-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [UserDataService]
})
export class DashboardComponent implements OnInit {

  constructor(private _userDataService: UserDataService) {
    this._userDataService.getUsers().subscribe(
      data => localStorage.setItem('userData', JSON.stringify(data)),
      err => console.log('Error while loading User Data'),
      () => console.log('Finished')
    );
  }

  ngOnInit() {
  }

}
