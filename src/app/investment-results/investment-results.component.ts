import { Component, Input } from '@angular/core'

import { InputData } from '../user-input/user-input.model'
import { calculateInvestmentResults } from './investment-results'

@Component({
  selector: 'app-investment-results',
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.scss',
})
export class InvestmentResultsComponent {
  @Input({ required: true }) inputData!: InputData

  get investmentResults() {
    console.log('Calculating investment results')

    return calculateInvestmentResults(
      this.inputData.initialInvestment,
      this.inputData.annualInvestment,
      this.inputData.expectedReturn,
      this.inputData.duration,
    )
  }
}
