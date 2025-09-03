import {Component, Input} from '@angular/core';
import {IdGeneratorService} from '../../services/id-generator.service';
@Component({
  selector:'app-card',
  standalone:true,
  imports:[],
  templateUrl:'./card.component.html',
  styleUrl:'./card.component.css',
  viewProviders:[IdGeneratorService]
})
export class CardComponent{
  @Input() prefix:string='';
  constructor(private idGenerator:IdGeneratorService){};
  public createId=():string=>{
    return this.idGenerator.createId(this.prefix);
  }
}
