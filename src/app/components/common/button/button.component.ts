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
  @Input() color: string = 'primary';
  @Input() textColor: string = '';
  @Input() value: number = 0;
  @Input() isActive: boolean = false;
  
  tipSelected = output<number>();


  onTipSelected(value: number) {
    this.tipSelected.emit(value)
  }

  getButtonClasses(): { [key: string]: boolean } {
    return {
      'app-button': true,
      [`button-${this.color}`]: true,
      'button-active': this.isActive
    };
  }
}
