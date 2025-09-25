import{
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  AfterContentInit,
  ContentChild,
  ElementRef
} from '@angular/core';
@Component({
  selector:'ng-after-content-init-component',
  standalone:true,
  imports:[],
  templateUrl:'./demo.component.html',
  styleUrl:'./demo.component.css',
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.Default
})
export class NgAfterContentInitComponent implements AfterContentInit{
  @ContentChild('message') projectedElement!:ElementRef;
  public constructor(){};
  ngAfterContentInit():void{
    console.log(`child sees the projected content: ${this.projectedElement.nativeElement.textContent}`);
    const element=this.projectedElement.nativeElement;
    element.style.backgroundImage='linear-gradient(90deg, blue, red)';
    element.style.webkitBackgroundClip='text';
    element.style.webkitTextFillColor='transparent';
  }
}
