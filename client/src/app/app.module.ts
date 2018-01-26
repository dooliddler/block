import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

import { AuthHttpService } from './providers/auth-http.service';
import { UserDataService } from './providers/user-data.service';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './pages/list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule
  ],
  providers: [AuthHttpService, UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
