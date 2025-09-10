import {Component, ViewEncapsulation, ViewChild, AfterViewInit} from '@angular/core';
import {ViewChild3Component} from './components/communication/view-child/view-child-3/view-child-3.component';
@Component({
  selector:'app-root',
  standalone:true,
  imports:[ViewChild3Component],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class AppComponent implements AfterViewInit{
  constructor(){};
  @ViewChild(ViewChild3Component) viewChild3Component!:ViewChild3Component;
  ngAfterViewInit(){
    this.viewChild3Component.childAlert();
  }
  public notify=():void=>{
    this.viewChild3Component.childMessage='changed by parent';
    this.viewChild3Component.childAlert();
  }
}
