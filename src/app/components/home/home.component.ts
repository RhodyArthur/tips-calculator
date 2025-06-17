import { Component, computed, signal } from '@angular/core';
import { InputCardComponent } from "../input-card/input-card.component";
import { DisplayCardComponent } from "../display-card/display-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputCardComponent, DisplayCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {

  selectedTipAmount = signal<number>(0);
  billAmount = signal<number>(0);
  persons = signal<number>(1);

  getTip(tipAmount: number) {
    this.selectedTipAmount.set(tipAmount)
  }

  getBillAmount(amount: number) {
    this.billAmount.set(amount)
  }

  getNumOfPeople(people: number) {
    this.persons.set(people)
  }

  amountPerPerson = computed(() => this.billAmount()/this.persons())
}
