import{
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';
import{
  FormsModule
} from '@angular/forms';
import{
  ComponentLifecycleDemo1Component
} from './components/communication/component-lifecycle/demo1/demo1.component';
@Component({
  selector:'app-root',
  standalone:true,
  imports:[ComponentLifecycleDemo1Component, FormsModule],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css',
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.Default
})
export class AppComponent{
  // input reference to ComponentLifecycleDemo1Component
  public input_text!:string;
  constructor(){};
}
