import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sqaureflex',
  templateUrl: './sqaureflex.component.html',
  styleUrls: ['./sqaureflex.component.scss']
})
export class SqaureflexComponent {
  @Input() divWidth: number = 200;
  @Input() divHeight: number = 100;

}
