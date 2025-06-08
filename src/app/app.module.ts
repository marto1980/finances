import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { InvestmentResultsComponent } from './investment-results/investment-results.component'
import { UserInputComponent } from './user-input/user-input.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InvestmentResultsComponent,
    UserInputComponent,
  ], // non-standalone components
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule, // shared module
    FormsModule, // reactive forms module
  ], // standalone components
})
export class AppModule {}
