import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AngularLearningComponent } from './angular-learning/angular-learning.component';
import { ClientManagementComponent } from './client-management/client-management.component';
import { ConfigurePolicyComponent } from './configure-policy/configure-policy.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeManagementComponent } from './employee-management/employee-management.component';
import { EventComponent } from './event/event.component';
import { PlacementDriveManagementComponent } from './placement-drive-management/placement-drive-management.component';
import { PoliciesManagementComponent } from './policies-management/policies-management.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  
{
  path:"dashboard", component:DashboardComponent
},
{
  path:"about", component:AboutComponent
},
{
  path:"settings", component:SettingsComponent
},
{
  path:"profile", component:ProfileComponent
},
{
  path:"schedule", component:ScheduleComponent
},
  {
    path: '', redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: "dashboard", component: DashboardComponent
  },
  {
    path: "about", component: AboutComponent
  },
  {
    path: "settings", component: SettingsComponent
  },
  {
    path: "profile", component: ProfileComponent
  },
  {
    path: "event", component: EventComponent
  },
  {
    path: "employee-management", component: EmployeeManagementComponent
  },
  {
    path: "project-management", component: ProjectManagementComponent
  },
  {
    path: "client-management", component: ClientManagementComponent
  },
  {
    path: "placement-drive-management", component: PlacementDriveManagementComponent
  },
  {
    path: "angular-demo", component: AngularLearningComponent
  },
  {
    path: "policies-management", component: PoliciesManagementComponent
  },
  {
    path: "configure-policy", component: ConfigurePolicyComponent
  },
  {
   path: "", redirectTo: "configure-policy", pathMatch: "full"
  },
  {
    path: "**", component: ConfigurePolicyComponent

  },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
