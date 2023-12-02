import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AdventDailyModule } from '../components/advent-daily/advent-daily.module';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],
  exports: [AppComponent],
  imports: [CommonModule, AdventDailyModule, RouterOutlet, BrowserModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
