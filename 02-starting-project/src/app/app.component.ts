import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserinputComponent } from './userinput/userinput.component';
import { InvestmentInput } from './investment-input.model';
import { InvestmentsResultsComponent } from "./investments-results/investments-results.component";
import { InvestmentOutput } from './investment-output.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserinputComponent, InvestmentsResultsComponent],
})
export class AppComponent {
  resultsData?: InvestmentOutput[];

  calculateInvestmentResults(data: InvestmentInput) {
    
    const {initialInvestment, duration, expectedReturn, annualInvestment}=data;
    const annualData = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }

    this.resultsData=annualData;
  }
}
