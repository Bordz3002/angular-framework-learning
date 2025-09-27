import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {NgAfterViewInitDemoComponent} from './components/communication/component-lifecycle/ngAfterViewInit/demo/demo.component';
@Component({
  selector:'app-root',
  standalone:true,
  imports:[NgAfterViewInitDemoComponent],
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css'],
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.Default
})
export class AppComponent{
  
}
