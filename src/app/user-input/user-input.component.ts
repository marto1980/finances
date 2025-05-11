import { Component, EventEmitter, Output } from '@angular/core'
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
  formData: InputFormData = { ...initialFormData }
  @Output() calculate = new EventEmitter<InputData>()
  onSubmit() {
    if (isInputData(this.formData)) {
      this.calculate.emit(this.formData)
      this.formData = { ...initialFormData }
    }
  }
}
