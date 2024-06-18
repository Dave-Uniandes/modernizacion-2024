import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './pages/calculator/calculator.component';

const routes: Routes = [
    { path: 'calculadora', component: CalculatorComponent },
    { path: '**', component: CalculatorComponent },  
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }