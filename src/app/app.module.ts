import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { HeaderComponent } from './header/header.component'
import { InvestmentResultsComponent } from './investment-results/investment-results.component'
import { UserInputModule } from './user-input/user-input.module'

@NgModule({
  declarations: [AppComponent, HeaderComponent, InvestmentResultsComponent], // non-standalone components
  bootstrap: [AppComponent],
  imports: [BrowserModule, UserInputModule], // standalone components
})
export class AppModule {}
