import { Component, EventEmitter, Output } from '@angular/core'

import { INPUT_TYPES } from './user-input.model'

@Component({
  selector: 'app-user-input',
  imports: [],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.scss',
})
export class UserInputComponent {
  inputTypes = INPUT_TYPES
  @Output() calculate = new EventEmitter<void>()
  onClick() {
    this.calculate.emit()
  }
}
