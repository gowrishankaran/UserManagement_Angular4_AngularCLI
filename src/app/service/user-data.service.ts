import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserDataService {

  constructor(private _http: Http) { }

  getUsers() {
    return this._http
      .get('../data/users.json')
      .map(res => res.json());
  }

  setData(data) {
    localStorage.setItem('userData', JSON.stringify(data));
  }

  getData() {
    return JSON.parse(localStorage.getItem('userData'));
  }



}
