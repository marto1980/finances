import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { InvestmentResultsComponent } from './investment-results/investment-results.component'
import { UserInputComponent } from './user-input/user-input.component'

@NgModule({
  declarations: [AppComponent], // non-standalone components
  bootstrap: [AppComponent],
  imports: [
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent,
    BrowserModule,
  ], // standalone components
})
export class AppModule {}
