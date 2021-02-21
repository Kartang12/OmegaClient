import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './_Guards/admin.guard';
import { UserComponent } from './user/user.component';
import { ApisComponent } from './user/apis/apis.component';


const adminRoutes: Routes = [
  // { path: 'user', component: UsersComponent},
];

const userRoutes: Routes = [
  { path: '', redirectTo: 'apis', pathMatch: 'full'},
  { path: 'apis', component: ApisComponent }
];

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  { path: 'admin', component: AdminComponent, children: adminRoutes },
  { path: 'user', component: UserComponent },
  { path: 'user', component: UserComponent, children: userRoutes },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
