import { Component, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent {
  @Input() step: number = 1;
  @Output() counterChanged = new EventEmitter();
  @Input() counter: number = 0;
  @Input() inputDisplay = true;
  
   
  decrease() {
    console.log('Hey decrease');
    if (this.counter - this.step >= 0) {
      this.counter = this.counter - this.step;
      this.counterChanged.emit(this.counter);
    }
  }

  increase() {
    if (this.counter + this.step < 100){
      this.counter = this.counter + this.step;
      this.counterChanged.emit(this.counter);
    }
  }

}
