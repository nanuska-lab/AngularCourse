import { Component, inject, Input } from '@angular/core';
import { InvestmentOutput } from '../investment-output.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investments-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investments-results.component.html',
  styleUrl: './investments-results.component.css'
})
export class InvestmentsResultsComponent {

  private investmentResults = inject (InvestmentService);

  get results(){
    return this.investmentResults.resultsData;
  }
}
