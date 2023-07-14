import {Component, OnInit} from '@angular/core';
import {Select2Data, Select2Option} from "ng-select2-component";
import {UsersMod} from "../../models/UsersMod";
import {UsersService} from "../../services/users.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})

export class TableComponent implements OnInit{
  usersList:UsersMod[]
  searchText:string = ""
  usersCount: number = 0
  pagination: number = 1
  limit:number = 4

  constructor(private usersService:UsersService) {}

  ngOnInit() {
    this.usersService.getAllUsers().subscribe(users => {
      this.usersList = users;
      this.usersCount = users.length;
    });
  }

  nextPage(){
    if(Math.ceil(this.usersCount / this.limit) !== this.pagination )  this.pagination += 1;
  }

  prevPage(){
    if(this.pagination > 1) this.pagination -= 1;
  }
}
