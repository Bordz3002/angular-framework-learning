import{
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';
// ngOnInit demo component
import{
  NgOnInitDemoComponent
} from './components/communication/component-lifecycle/ngOnInit/demo/demo.component';
@Component({
  selector:'app-root',
  standalone:true,
  imports:[NgOnInitDemoComponent],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css',
  encapsulation:ViewEncapsulation.Emulated,
  changeDetection:ChangeDetectionStrategy.Default
})
export class AppComponent{
  // userID for ngOnInit component
  public selected_user:number=1;
  constructor(){};
  public setUser(ID:number):void{
    this.selected_user=(ID>=1 && ID <=2)? ID:0;
  }
}
