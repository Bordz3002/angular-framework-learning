import {Component, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {OnPushObjectComponent} from './components/changeDetection/on-push-object/on-push-object.component';
@Component({
  selector:'app-root',
  standalone:true,
  imports:[OnPushObjectComponent],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class AppComponent{
  constructor(){};
}
