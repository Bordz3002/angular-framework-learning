import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ContentChildren,
  ElementRef,
  AfterContentInit,
  QueryList
} from '@angular/core';
@Component({
  selector:'content-child-demo4',
  standalone:true,
  imports:[],
  templateUrl:'./demo4.component.html',
  styleUrl:'./demo4.component.css',
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.Default
})
export class ContentChildDemo4{
  @ContentChildren('contentToProject') content!:QueryList<ElementRef>;
  constructor(){};
  ngAfterContentInit():void{
    this.content.forEach((element, iteration):void=>{
      element.nativeElement.style.color=(iteration % 2 ===0)? 'blue':'orange';
      element.nativeElement.style.fontWeight='bolder';
    });
    this.content.changes.subscribe((list):void=>{
      console.log(`contents changed: ${list.length}`);
    });
  }
}
