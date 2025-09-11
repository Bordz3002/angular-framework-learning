import {Component, ViewEncapsulation, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import { ViewChild4Component } from './components/communication/view-child/view-child-4/view-child-4.component';
@Component({
  selector:'app-root',
  standalone:true,
  imports:[ViewChild4Component],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class AppComponent implements AfterViewInit{
  constructor(){};
  @ViewChild(ViewChild4Component) viewChild4Component!:ViewChild4Component;
  @ViewChild('alertMessage') inputRef!:ElementRef;
  ngAfterViewInit(){
    this.viewChild4Component.message='message from parent';
  }
  public alert=():void=>{
    this.viewChild4Component.alertMessage();
  }
}
