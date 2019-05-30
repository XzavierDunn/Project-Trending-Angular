import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalTrendsComponent } from '../app/component/global-trends/global-trends.component';
import { GlobalTrendsService } from './services/global-trends.service';

const appRoutes: Routes = [
  { path: 'glob', component: GlobalTrendsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    GlobalTrendsComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    GlobalTrendsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
