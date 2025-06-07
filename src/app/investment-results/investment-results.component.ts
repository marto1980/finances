import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'

import { InvestmentResultsService } from '../investment-results.service'

@Component({
  selector: 'app-investment-results',
  imports: [CommonModule],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.scss',
})
export class InvestmentResultsComponent {
  readonly investmentResultsService = inject(InvestmentResultsService)
  inputData = this.investmentResultsService.formData
}
