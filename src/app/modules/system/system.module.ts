import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import { SharedModule } from '../shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SystemRoutingModule,
    SharedModule
  ],
  declarations: [
    SystemComponent
  ]
})
export class SystemModule { }
