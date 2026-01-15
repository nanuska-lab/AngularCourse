import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserinputComponent } from './userinput/userinput.component';
import { InvestmentInput } from './investment-input.model';
import { InvestmentsResultsComponent } from './investments-results/investments-results.component';
import { InvestmentOutput } from './investment-output.model';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserinputComponent, InvestmentsResultsComponent],
})
export class AppComponent {}
