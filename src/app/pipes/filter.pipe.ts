import { Pipe, PipeTransform } from '@angular/core';
import {UsersMod} from "../models/UsersMod";

@Pipe({
  name: 'filterUsers'
})
export class FilterUsersPipe implements PipeTransform {
  transform(users: UsersMod[], search: string): UsersMod[] {
    return users?.filter(p => p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
  }
}
