import { Component, EventEmitter, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'

import {
  INPUT_TYPES,
  InputData,
  InputFormData,
  isInputData,
} from './user-input.model'

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
})
export class UserInputComponent {
  inputTypes = INPUT_TYPES
  formData: InputFormData = {
    initialInvestment: undefined,
    annualInvestment: undefined,
    expectedReturn: undefined,
    duration: undefined,
  }
  @Output() calculate = new EventEmitter<InputData>()
  onSubmit() {
    console.log('Calling onSubmit in UserInputComponent')
    console.log('formData', this.formData)
    if (isInputData(this.formData)) {
      this.calculate.emit(this.formData)
    }
  }
}
