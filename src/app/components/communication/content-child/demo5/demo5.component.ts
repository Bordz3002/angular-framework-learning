import {Component, ViewEncapsulation, ChangeDetectionStrategy, ContentChild, ElementRef, AfterContentInit} from '@angular/core';
@Component({
  selector:'content-child-demo5',
  standalone:true,
  imports:[],
  templateUrl:'./demo5.component.ts',
  styleUrl:'./demo5.component.css',
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.Default
})
export class ContentChildDemo5 implements AfterContentInit{
  @ContentChild('message') paragraph!:ElementRef;
  constructor(){};
  ngAfterContentInit():void{
    this.paragraph.nativeElement.style.background='blue';
  }
}
