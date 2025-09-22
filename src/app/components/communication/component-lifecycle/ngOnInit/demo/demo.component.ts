import{
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';
@Component({
  selector:'demo-component',
  standalone:true,
  imports:[],
  templateUrl:'./demo.component.html',
  styleUrl:'./demo.component.css',
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.Default
})
export class NgOnInitDemoComponent{
  @Input() userID!:number;
  public userData!:string;
  constructor(){};
  ngOnInit():void{
    this.loadUser();
  }
  ngOnChanges(changes:SimpleChanges):void{
    if(changes['userID'] && !changes['userID'].firstChange){
      console.log(`ID changed to ${this.userID}`);
      this.loadUser();
    }
  }
  public loadUser():void{
    this.userData=(typeof this.userID!=='number')? 'no data':`fetched data for ID: ${this.userID}`;
  }
}
