import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import { OneWayCommunicationObjectChallengeComponent } from './components/communication/one-way-communication-object-challenge/one-way-communication-object-challenge.component';
interface config{
  name:string;
  age:number;
  email:string;
}
@Component({
  selector:'app-root',
  standalone:true,
  imports:[OneWayCommunicationObjectChallengeComponent],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css',
  encapsulation:ViewEncapsulation.ShadowDom,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent{
  constructor(){};
  public myUser:config={
    name:'alice',
    age:22,
    email:'alice@mail.com'
  }
  public switch=():void=>{
    this.myUser=(this.myUser.name==='alice')? {name:'bob', age:25, email:'bob@mail.com'}:{name:'alice', age:22, email:'alice@mail.com'};
  }
}
