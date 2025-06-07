import { Component, inject } from '@angular/core'

import { HeaderComponent } from './header/header.component'
import { InvestmentResultsService } from './investment-results.service'
import { InvestmentResultsComponent } from './investment-results/investment-results.component'
import { UserInputComponent } from './user-input/user-input.component'

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'finances'
  readonly investmentResultsService = inject(InvestmentResultsService)
}
