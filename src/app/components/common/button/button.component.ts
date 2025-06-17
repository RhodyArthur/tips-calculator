import { Component, EventEmitter, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.sass'
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() color: string = '';
  @Input() textColor: string = '';
  @Input() value: number = 0;
  
  tipSelected = output<number>();


  onTipSelected(value: number) {
    this.tipSelected.emit(value)
  }
}
