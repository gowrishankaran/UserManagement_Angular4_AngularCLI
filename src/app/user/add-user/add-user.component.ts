import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalOptions, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { UserType } from '../../util/user-type';
import { UserDataService } from '../../service/user-data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [UserDataService]
})
export class AddUserComponent implements OnInit {

  closeResult: string;
  userListsBack: UserType[];
  userLists: UserType[];
  isEdit: boolean;
  isAddNew: boolean;
  firstName: string;
  lastName: string;
  sex: string;
  age: number;
  maritialStatus: string;
  designation: string;
  email: string;
  mobileNumber: number;
  city: string;
  country: string;
  currentEditUserId: number;
  isCollapsed = false;
  modalRef: NgbModalRef;
  page = 1;
  pageSize = 7;
  totalUserLists: number;



  constructor(private modalService: NgbModal, private _userDataService: UserDataService) {
      console.log('Contstructor');

  }

  ngOnInit() {
    console.log('Initiated');
    // const data = JSON.parse(localStorage.getItem('userData'));
    this.loadData();
  }

  loadData() {
    this.userListsBack = this._userDataService.getData();
    this.totalUserLists = this.userListsBack.length;
    this.userLists = this.userListsBack.slice(this.page - 1, this.pageSize);
  }

  pagination() {
    let startIndex: number =  this.page - 1;
    let endIndex: number = this.pageSize;
    if (this.page === 1) {
      this.userLists = this.userListsBack.slice(startIndex, endIndex);
    } else {
        startIndex = (this.page * this.pageSize - this.pageSize);
        console.log('Page = ' + this.page);
        console.log('Page Size = ' + this.pageSize);
        console.log('start Ind = ' + startIndex);
        endIndex = (startIndex + this.pageSize) <= this.totalUserLists ? startIndex + this.pageSize : this.totalUserLists;
        console.log(startIndex + '=' + endIndex + '=' + this.totalUserLists);
        this.userLists = this.userListsBack.slice(startIndex, endIndex);
    }
  }


  submitRecords(form) {
    console.log('Form Values = ');
    console.log(form.value);
    if (this.isAddNew === true) {
      this.userLists.push(form.value);
    } else if (this.isEdit === true) {
       // this.userLists.splice(form.value);
      this.userLists.forEach((key, index) => {
        console.log(key.id + '=' + this.currentEditUserId);
        if (key.id === this.currentEditUserId) {
          console.log('Index Value' + index);
          this.userLists[index].firstName = form.value.firstName;
          this.userLists[index].lastName = form.value.lastName;
          this.userLists[index].sex = form.value.sex;
          this.userLists[index].age = form.value.age;
          this.userLists[index].email = form.value.email;
          this.userLists[index].maritialStatus = form.value.maritialStatus;
          this.userLists[index].designation = form.value.designation;
          this.userLists[index].mobile = form.value.mobileNumber;
          this.userLists[index].city = form.value.city;
          this.userLists[index].country = form.value.country;
        }
      });


      //  this._userDataService.setData(this.userLists);
      //  this.loadData();

       console.log(this.userLists);
       this._userDataService.setData(this.userLists);
    }

    this.modalRef.close();
  }

   /* Options for Modal */
  modalOptions: NgbModalOptions = {
    size: 'lg'
  };


  addNew(content) {
    this.isEdit = false;
    this.isAddNew = true;
    this.firstName = '';
    this.lastName = '';
    this.sex = '';
    this.age = null;
    this.maritialStatus = '';
    this.designation = '';
    this.email = '';
    this.mobileNumber = null;
    this.city = '';
    this.country = '';
    this.modalRef = this.modalService.open(content, this.modalOptions);
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  editUser(content, user) {
    this.isAddNew = false;
    this.isEdit = true;
    this.currentEditUserId = user.id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.sex = user.sex;
    this.age = user.age;
    this.maritialStatus = user.maritialStatus;
    this.designation = user.designation;
    this.email = user.email;
    this.mobileNumber = user.mobile;
    this.city = user.city;
    this.country = user.country;
    this.modalRef = this.modalService.open(content, this.modalOptions);
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

 
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
