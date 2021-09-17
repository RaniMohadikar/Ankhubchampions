import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { EventComponent } from './event/event.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { ClientManagementComponent } from './client-management/client-management.component';
import { PlacementDriveManagementComponent } from './placement-drive-management/placement-drive-management.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AngularLearningComponent } from './angular-learning/angular-learning.component';
import { PoliciesManagementComponent } from './policies-management/policies-management.component';
import { ConfigurePolicyComponent } from './configure-policy/configure-policy.component';



@NgModule({
  declarations: [
   
    AppComponent,
    DashboardComponent,
    AboutComponent,
    SettingsComponent,
    ProfileComponent,
    ScheduleComponent,
    EventComponent,
    EmployeeManagementComponent,
    ClientManagementComponent,
    PlacementDriveManagementComponent,
    ProjectManagementComponent,
    EmployeeManagementComponent,
    AngularLearningComponent,
    PoliciesManagementComponent,
    ConfigurePolicyComponent,
    
     ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
