import{
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
@Component({
  selector:'demo1-component',
  standalone:true,
  imports:[],
  templateUrl:'./demo1.component.html',
  styleUrl:'./demo1.component.css',
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.Default
})
export class ComponentLifecycleDemo1Component implements OnChanges{
  @Input() name!:string;
  constructor(){};
  ngOnChanges(changes:SimpleChanges):void{
    if(changes['name']){
      console.log(`Name was changed from ${changes['name'].previousValue} to ${changes['name'].currentValue}`);
    }
  }
}
