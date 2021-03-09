import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './_Guards/admin.guard';
import { UserComponent } from './user/user.component';
import { ApisComponent } from './user/apis/apis.component';
import { MyTasksComponent } from './user/my-tasks/my-tasks.component';
import { RegisterComponent } from './register/register.component';
import { UserStatsComponent } from './admin/user-stats/user-stats.component';


const adminRoutes: Routes = [
  { path: '', component: AdminComponent},
  { path: 'userStats', component: UserStatsComponent}
];

const userRoutes: Routes = [
  { path: '', redirectTo: 'apis', pathMatch: 'full'},
  { path: 'apis', component: ApisComponent },
  { path: 'myTasks', component:  MyTasksComponent}
];

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'admin', component: AdminComponent, children: adminRoutes },
  { path: 'user', component: UserComponent },
  { path: 'user', component: UserComponent, children: userRoutes },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
