import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ItemReportComponent } from './item-report.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ItemReportComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ]
})
export class ItemReportModule { }
