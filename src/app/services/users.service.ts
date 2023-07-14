import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UsersMod} from "../models/UsersMod";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private  http: HttpClient) {}

  getAllUsers():Observable<UsersMod[]>{
    return this.http.get<UsersMod[]>("https://jsonplaceholder.typicode.com/users")
  }
}
