import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {TwoWayObjectComponent} from './components/communication/two-way-object/two-way-object.component';
interface User{
  name:string;
  email:string;
}
@Component({
  selector:'app-root',
  standalone:true,
  imports:[TwoWayObjectComponent],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css',
  encapsulation:ViewEncapsulation.ShadowDom,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent{
  constructor(){};
  public user:User={
    name:'alice',
    email:'alice@mail.com'
  }
  public reset=():void=>{
    this.user={
      name:'alice',
      email:'alice@mail'
    }
  }
}
