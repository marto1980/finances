import { Component, EventEmitter, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'

import { INPUT_TYPES } from './user-input.model'

@Component({
  selector: 'app-user-input',
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
})
export class UserInputComponent {
  inputTypes = INPUT_TYPES
  @Output() calculate = new EventEmitter<void>()
  onSubmit() {
    this.calculate.emit()
  }
}
