import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-userinput',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './userinput.component.html',
  styleUrl: './userinput.component.css',
})
export class UserinputComponent {
  enteredInitialInvestment='0';
  enteredAnnualInvestment='0';
  enteredExpectedReturn='5';
  enteredDuration='10';

  onSubmit() {
    console.log('submited');
    console.log(this.enteredAnnualInvestment);
    console.log(this.enteredDuration);
    console.log(this.enteredExpectedReturn);
    console.log(this.enteredInitialInvestment);
  }
}
