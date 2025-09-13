import {Component, ViewEncapsulation, ViewChildren, QueryList, AfterViewInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewChild6Component} from './components/communication/view-child/view-child-6/view-child-6.component';
import { setThrowInvalidWriteToSignalError } from '@angular/core/primitives/signals';
@Component({
  selector:'app-root',
  standalone:true,
  imports:[ViewChild6Component, CommonModule],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class AppComponent implements AfterViewInit{
  public names:Array<string>=['bob', 'charlie', 'alice'];
  @ViewChildren(ViewChild6Component) childrenComponent!:QueryList<ViewChild6Component>;
  constructor(){};
  ngAfterViewInit(){
    console.log('Children: ', this.childrenComponent.toArray());
  }
  public updateAllChildrenMessage=(newMessage:string):void=>{
    this.childrenComponent.forEach(child =>child.updateMessage(newMessage));
  }
  public greetAllChildren=():void=>{
    this.childrenComponent.forEach(child =>child.greet());
  }
}
