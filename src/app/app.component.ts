import{
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';
import{
  NgDoCheckDemoComponent
} from './components/communication/component-lifecycle/ngDoCheck/demo/demo.component';
@Component({
  selector:'app-root',
  standalone:true,
  imports:[NgDoCheckDemoComponent],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css',
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.Default
})
export class AppComponent{
  public items:string[]=['hello', 'world'];
  public constructor(){};
}
