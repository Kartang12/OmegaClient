import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

import { environment } from 'src/environments/environment';
import { JwtModule } from '@auth0/angular-jwt';
import { ApisComponent } from './user/apis/apis.component'
import { UserComponent } from './user/user.component';
import { MyTasksComponent } from './user/my-tasks/my-tasks.component';
import { RegisterComponent } from './register/register.component';
import { UserStatsComponent } from './admin/user-stats/user-stats.component';


export function tokenGetter(){
  return localStorage.getItem('token')
}

@NgModule({
  declarations: [
    UserComponent,
    AppComponent,
    LoginComponent,
    AdminComponent,
    ApisComponent,
    MyTasksComponent,
    RegisterComponent,
    UserStatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: environment.tokenWhiteListDomains
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
