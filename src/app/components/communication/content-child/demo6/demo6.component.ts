import {Component, ViewEncapsulation, ChangeDetectionStrategy, ContentChild, AfterContentInit, ElementRef} from '@angular/core';
@Component({
  selector:'content-child-demo6',
  standalone:true,
  imports:[],
  templateUrl:'./demo6.component.html',
  styleUrl:'./demo6.component.css',
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.Default
})
export class ContentChildDemo6 implements AfterContentInit{
  @ContentChild('demo6Message') message!:ElementRef;
  constructor(){};
  ngAfterContentInit():void{
    this.message.nativeElement.style.fontStyle='italic';
    this.message.nativeElement.style.fontWeight='bold';
  }
}
