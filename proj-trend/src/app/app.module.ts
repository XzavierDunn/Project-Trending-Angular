import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalTrendsComponent } from '../app/component/global-trends/global-trends.component';
import { GlobalTrendsService } from './services/global-trends.service';
import { LocationTrendsComponent } from './component/location-trends/location-trends.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs';
import {MatPaginatorModule} from '@angular/material/paginator';



const appRoutes: Routes = [
  { path: 'glob', component: GlobalTrendsComponent },
  { path: 'loc', component: LocationTrendsComponent },
  { path: '**', component: GlobalTrendsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GlobalTrendsComponent,
    LocationTrendsComponent
  ],
  imports: [
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTabsModule,
    MatPaginatorModule,
  ],
  providers: [
    GlobalTrendsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
