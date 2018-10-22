import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';

import {AboutComponent} from './site/components/about/about.component';
import {ContactComponent} from './site/components/contact/contact.component';
import {PlanComponent} from './site/components/plan/plan.component';
import {MainComponent} from './site/components/main/main.component';
import {PrivacyComponent} from './site/components/privacy/privacy.component';
import {ProjectsComponent} from './site/components/projects/projects.component';
import {ServicesComponent} from './site/components/services/services.component';
import {SingleComponent} from './site/components/single/single.component';
import {TermsComponent} from './site/components/terms/terms.component';
import {StatusComponent} from './site/components/status/status.component';

const APP_ROUTES: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'plan', component: PlanComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'single', component: SingleComponent},
  {path: 'terms', component: TermsComponent},
  {path: 'status', component: StatusComponent},
  {path: '', component: MainComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, {useHash: true});
