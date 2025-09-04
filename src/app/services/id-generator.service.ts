import {Injectable} from '@angular/core';
@Injectable()
export class UserBadgeGeneratorService{
  constructor(){};
  public generateId=():string=>{
    return 'USERID'+String(Math.floor(Math.random()*100000)).padStart(6, '0');
  }
}
