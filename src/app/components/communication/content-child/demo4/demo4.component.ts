import {Component, ViewEncapsulation, ChangeDetectionStrategy, ContentChild, ElementRef, AfterContentInit} from '@angular/core';
@Component({
  selector:'content-child-demo4',
  standalone:true,
  imports:[],
  templateUrl:'./demo4.component.html',
  styleUrl:'./demo4.component.css',
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.Default
})
export class ContentChildDemo4Component{
  @ContentChild('projectedContent') projectedElement!:ElementRef;
  constructor(){};
  ngAfterContentInit():void{
    this.projectedElement.nativeElement.style.color='blue';
  }
}
