import { Injectable } from '@angular/core'

import { calculateInvestmentResults } from './investment-results/investment-results'
import { InvestmentResult } from './investment-results/investment-results.model'
import {
  initialFormData,
  InputFormData,
  isInputData,
} from './user-input/user-input.model'

@Injectable({ providedIn: 'root' })
class InvestmentResultsService {
  formData: InputFormData = { ...initialFormData }
  investmentResults: readonly InvestmentResult[] = []

  onCalculate = () => {
    if (isInputData(this.formData)) {
      this.investmentResults = calculateInvestmentResults(
        this.formData.initialInvestment,
        this.formData.annualInvestment,
        this.formData.expectedReturn,
        this.formData.duration,
      )
    }
    this.formData = { ...initialFormData }
  }
}

export { InvestmentResultsService }
