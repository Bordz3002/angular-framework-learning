import {Component, Input, ViewEncapsulation, ChangeDetectionStrategy} from '@angular/core';
import {UserBadgeGeneratorService} from '../../../services/id-generator.service';
@Component({
  selector:'app-id-generate-component',
  standalone:true,
  imports:[],
  templateUrl:'./user-badge-challenge.component.html',
  styleUrl:'./user-badge-challenge.component.css',
  encapsulation:ViewEncapsulation.ShadowDom,
  changeDetection:ChangeDetectionStrategy.OnPush,
  viewProviders:[UserBadgeGeneratorService]
})
export class IdGeneratorComponent{
  constructor(public idGenerator:UserBadgeGeneratorService){};
  @Input() userName:string='';
}
