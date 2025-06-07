import { Component, inject } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { InvestmentResultsService } from '../investment-results.service'
import { INPUT_TYPES } from './user-input.model'

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
})
export class UserInputComponent {
  inputTypes = INPUT_TYPES
  readonly investmentResultsService = inject(InvestmentResultsService)
  onSubmit = this.investmentResultsService.onCalculate
}
