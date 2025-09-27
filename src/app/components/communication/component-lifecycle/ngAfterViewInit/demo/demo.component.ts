import {Component, ViewEncapsulation, ChangeDetectionStrategy, AfterViewInit, ViewChild, ElementRef, Renderer2} from '@angular/core';
@Component({
  selector:'ng-after-view-init-demo-component',
  standalone:true,
  imports:[],
  templateUrl:'./demo.component.html',
  styleUrls:['./demo.component.html'],
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.Default
})
export class NgAfterViewInitDemoComponent implements AfterViewInit{
  @ViewChild('paragraph') paragraph!:ElementRef<HTMLParagraphElement>;
  constructor(private renderer:Renderer2){};
  ngAfterViewInit():void{
    this.renderer.setStyle(this.paragraph.nativeElement, 'background', 'linear-gradient(90deg, blue, red)');
    this.renderer.setStyle(this.paragraph.nativeElement, 'width', 'fit-content');
    this.renderer.setStyle(this.paragraph.nativeElement, '-webkit-background-clip', 'text');
    this.renderer.setStyle(this.paragraph.nativeElement, '-webkit-text-fill-color', 'transparent');
  }
}
