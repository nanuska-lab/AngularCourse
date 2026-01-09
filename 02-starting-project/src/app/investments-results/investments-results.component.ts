import { Component, Input } from '@angular/core';
import { InvestmentOutput } from '../investment-output.model';

@Component({
  selector: 'app-investments-results',
  standalone: true,
  imports: [],
  templateUrl: './investments-results.component.html',
  styleUrl: './investments-results.component.css'
})
export class InvestmentsResultsComponent {
  @Input() results?: InvestmentOutput[];
}
