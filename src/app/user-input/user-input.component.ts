import { Component, output, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'

import {
  initialFormData,
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
  formData = signal<InputFormData>({ ...initialFormData })
  calculate = output<InputData>()
  onSubmit() {
    const formData = this.formData()
    if (isInputData(formData)) {
      this.calculate.emit(formData)
      this.formData.set(initialFormData)
    }
  }
}
