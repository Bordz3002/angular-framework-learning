import {Component, ViewEncapsulation} from '@angular/core';
import { RouterLink } from "@angular/router";
@Component({
  selector:'app-child-encapsulated',
  standalone:true,
  imports: [RouterLink],
  templateUrl:'./shadow-dom.component.html',
  styleUrl:'./shadow-dom.component.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class EncapsulatedChild{
  constructor(){};
}
