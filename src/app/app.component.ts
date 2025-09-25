import{
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';
import{
  NgAfterContentInitComponent
} from './components/communication/component-lifecycle/ngAfterContentInit/demo/demo.component';
@Component({
  selector:'app-root',
  standalone:true,
  imports:[NgAfterContentInitComponent],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css',
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.Default
})
export class AppComponent{
  public constructor(){};
}
