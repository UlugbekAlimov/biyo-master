import { Routes } from '@angular/router';
import { RegisterComponent } from './features/auth/register/register.component';
import { MasterProfileSetupComponent } from './features/master-profile-setup/master-profile-setup.component';
import { MasterSheduleComponent } from './features/master-shedule/master-shedule.component';

export const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path:'register', component: RegisterComponent },
  { path:'setup', component: MasterProfileSetupComponent },
  { path: 'shedule', component: MasterSheduleComponent }
];
