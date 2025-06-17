import { Component, input, output } from '@angular/core';
import { ButtonComponent } from "../common/button/button.component";
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-display-card',
  standalone: true,
  imports: [ButtonComponent, CurrencyPipe],
  templateUrl: './display-card.component.html',
  styleUrl: './display-card.component.sass'
})
export class DisplayCardComponent {
  amountByPerson = input<number>();
  totalAmount = input<number>();
  buttonClicked = output<void>();

  onResetClicked() {
    this.buttonClicked.emit()
  }

}
