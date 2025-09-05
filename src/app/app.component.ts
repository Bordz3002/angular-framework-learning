import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {IdGeneratorComponent} from './components/components-challenge/user-badge-challenge/user-badge-challenge.component';
@Component({
  selector:'app-root',
  standalone:true,
  imports:[IdGeneratorComponent],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class AppComponent{
  constructor(){};
}
