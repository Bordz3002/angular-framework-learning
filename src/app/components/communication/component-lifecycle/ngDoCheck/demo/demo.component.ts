import{
  Component,
  ViewEncapsulation,
  Input,
  DoCheck
} from '@angular/core';
@Component({
  selector:'demo-component',
  standalone:true,
  imports:[],
  templateUrl:'./demo.component.html',
  styleUrl:'./demo.component.css',
  encapsulation:ViewEncapsulation.Emulated
})
export class NgDoCheckDemoComponent implements DoCheck{
  @Input() items!:string[];
  private _oldItemsLength:number=0;
  constructor(){};
  ngDoCheck():void{
    if(this.items.length !== this._oldItemsLength){
      console.log(`items changed: `, this.items);
      this._oldItemsLength=this.items.length;
    }
  }
  public addItem(item:string):void{
    this.items.push(item);
  }
}
