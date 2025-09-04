import {Component} from '@angular/core';
import {OnPushComponent} from './components/changeDetection/on-push/on-push.component';
@Component({
  selector:'app-root',
  standalone:true,
  imports:[OnPushComponent],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css'
})
export class AppComponent{
  constructor(){};
  public message:string='';
  public changeMessage=():void=>{
    this.message='Hello-'+String(Math.floor(Math.random()*10000));
  }
}
