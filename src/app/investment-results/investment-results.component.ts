import { CommonModule } from '@angular/common'
import { Component, computed, input } from '@angular/core'

import { InputData } from '../user-input/user-input.model'
import { calculateInvestmentResults } from './investment-results'

@Component({
  selector: 'app-investment-results',
  imports: [CommonModule],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.scss',
})
export class InvestmentResultsComponent {
  inputData = input.required<InputData>()
  private readonly callInvestmentResults = () =>
    calculateInvestmentResults(
      this.inputData().initialInvestment,
      this.inputData().annualInvestment,
      this.inputData().expectedReturn,
      this.inputData().duration,
    )

  investmentResults = computed(this.callInvestmentResults)
}
