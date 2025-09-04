import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {OnPushObjectChallenge} from './components/changeDetection/on-push-object-challenge/on-push-object-challenge.component';
interface todo{
  id:number;
  text:string;
  done:boolean;
}
@Component({
  selector:'app-root',
  standalone:true,
  imports:[OnPushObjectChallenge],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class AppComponent{
  constructor(){};
  public myTodo:todo={ id:1, text:'learn angular', done:false};
  public mutate=():void=>{
    this.myTodo.done=true;
  }
  public replace=():void=>{
    this.myTodo={...this.myTodo, done:true};
  }
}
