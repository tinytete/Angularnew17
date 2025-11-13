import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-max-min-meter',
  templateUrl: './max-min-meter.component.html',
  styleUrl: './max-min-meter.component.scss'
})
export class MaxMinMeterComponent {
  @Input() minLabel = "minLabel";
  @Input() maxLabel = 'maxLabel';

  @Output() minChange = new EventEmitter();
  @Output() maxChange = new EventEmitter();

  doMinChange(Value: number) {
    this.minChange.emit(Value);
  }

  doMaxChange(Value: number) {
    this.maxChange.emit(Value);
  }
}
