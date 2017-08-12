import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from "@angular/router";

import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Array<Route> =[
  {
    path: 'dashboard',
    component: DashboardComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent]
})
export class AdminModule { }
