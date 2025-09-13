import {Component, ViewEncapsulation, ChangeDetectionStrategy, ViewChildren, QueryList, AfterViewInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ViewChild7Component} from './components/communication/view-child/view-child-7/view-child-7.component';
@Component({
  selector:'app-root',
  standalone:true,
  imports:[ViewChild7Component, CommonModule],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css',
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.Default
})
export class AppComponent implements AfterViewInit{
  public names:Array<string>=['bob', 'charlie'];
  public childComponentCount:number=0;
  @ViewChildren(ViewChild7Component) childComponents!:QueryList<ViewChild7Component>;
  constructor(){};
  ngAfterViewInit(){
    this.childComponentCount=this.childComponents.length;
    this.childComponents.changes.subscribe((list:QueryList<ViewChild7Component>)=>{
      this.childComponentCount=list.length;
    })
  }
  public addChild=(childName:string):void=>{
    if(childName.trim()){ this.names.push(childName);}
  }
  public removeLastChild=():void=>{ this.names.pop();}
}
