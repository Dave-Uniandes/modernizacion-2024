import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { HeaderComponent } from './components/header/header.component';
import { SelectorComponent } from './components/selector/selector.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { AppRoutingModule } from './app-routing.module';
import { ScoreboardComponent } from './components/scoreboard/scoreboard.component';
import { DonationComponent } from './components/donation/donation.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HeaderComponent,
    SelectorComponent,
    CalculatorComponent,
    ScoreboardComponent,
    DonationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
