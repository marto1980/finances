import { Component, signal } from '@angular/core'

import { HeaderComponent } from './header/header.component'
import { InvestmentResultsComponent } from './investment-results/investment-results.component'
import { UserInputComponent } from './user-input/user-input.component'
import { InputData } from './user-input/user-input.model'

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'finances'
  inputData = signal<InputData | undefined>(void 0)

  onCalculate(inputData: Readonly<InputData>) {
    this.inputData.set(inputData)
  }
}
