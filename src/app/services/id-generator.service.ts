import {Injectable} from '@angular/core';
@Injectable()
export class IdGeneratorService{
  constructor(){};
  public createId=(prefix:string):string=>{
    return prefix+'-'+String(Math.floor(Math.random()*10000)).padStart(4, '0');
  }
}
