import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { MainRoutingModule } from './main-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ],
  declarations: [
    MainComponent,
    HomeComponent
  ]
})
export class MainModule { }
