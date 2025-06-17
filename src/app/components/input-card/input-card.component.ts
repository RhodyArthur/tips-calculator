import { Component, computed, output, signal } from '@angular/core';
import { ButtonComponent } from "../common/button/button.component";
import { Button } from '../../models/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-card',
  standalone: true,
  imports: [ ButtonComponent, FormsModule],
  templateUrl: './input-card.component.html',
  styleUrl: './input-card.component.sass'
})
export class InputCardComponent {

  tipsButton: Button[] = [
    {
    label: '5%',
    color: '#00474B',
    value: 5
  },
  {
    label: '10%',
    color: '#00474B',
    value: 10
  },
  {
    label: '15%',
    color: '#00474B',
    value: 15
  }
  ,
  {
    label: '25%',
    color: '#00474B',
    value: 25
  },
  {
    label: '50%',
    color: '#00474B',
    value: 50
  }
] 

 bill = signal<number>(0);
 numberOfPeople = signal<number>(1);
 inputTip = signal<number>(0);
 customInputActive = signal<boolean>(false);

 tipAmount = output<number>();
 setBill = output<number>();
 setNumOfPeople = output<number>();


 

 constructor() {
 } 


  handleSelectedTip(tip: number | null = null) {
    const customTip = this.inputTip();

    if (tip !== null) {
      this.tipAmount.emit(tip);
      this.inputTip.set(0);
    } else if (typeof customTip === 'number' && customTip > 0) {
      this.tipAmount.emit(customTip);
    }
  }

  onSetBill(amount: number) {
    this.setBill.emit(amount)
  }

  onSetPeople(people: number) {
    this.setNumOfPeople.emit(people)
  }

}
