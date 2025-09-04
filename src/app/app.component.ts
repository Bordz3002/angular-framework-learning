import {Component, ViewEncapsulation} from '@angular/core';
import {EncapsulatedChild} from './components/encapsulation/shadow-dom/shadow-dom.component';
@Component({
  selector:'app-root',
  standalone:true,
  imports:[EncapsulatedChild],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class AppComponent{}
