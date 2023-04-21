import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FooterComponent } from './components/footer/footer.component';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { BodyComponent } from './components/body/body.component';

import { MatFormFieldModule } from "@angular/material/form-field";
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { environment } from '../environments/environment';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from "@angular/material/progress-bar"
import { HttpClientModule } from '@angular/common/http';
import { FeedbackSnackbarComponent } from './components/body/order/feedback-snackbar/feedback-snackbar.component';
import { RouterModule } from '@angular/router';
import { OrderComponent } from './components/body/order/order.component';
import { MatListModule } from '@angular/material/list';

import { MatIconModule } from '@angular/material/icon';

import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavigationComponent } from './components/body/side-navigation/side-navigation.component';
import { HomeComponent } from './components/body/home/home.component';
import { OrderFormComponent } from './components/body/order/order-form/order-form.component';
import { StatisticsComponent } from './components/body/statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    OrderComponent,
    OrderFormComponent,
    FeedbackSnackbarComponent,
    OrderComponent,
    SideNavigationComponent,
    HomeComponent,
    StatisticsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'order', component: OrderComponent, pathMatch: 'full' },
      { path: 'statistic', component: StatisticsComponent, pathMatch: 'full' },
      { path: 'home', component: HomeComponent, pathMatch: 'full' }
    ]),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatProgressBarModule,
    RecaptchaV3Module,
    MatListModule,
    HttpClientModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [{
    provide: RECAPTCHA_V3_SITE_KEY,
    useValue: '6LekOEElAAAAAF6GtSJigPM6I8vTCkgKdzPzh42o'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
