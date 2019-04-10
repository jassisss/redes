import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SiteRoutingModule} from './site-routing.module';
import {AboutComponent} from './components/about/about.component';
import {ServicesComponent} from './components/services/services.component';
import {ProjectsComponent} from './components/projects/projects.component';
import {PlanComponent} from './components/plan/plan.component';
import {ContactComponent} from './components/contact/contact.component';
import {SingleComponent} from './components/single/single.component';
import {PrivacyComponent} from './components/privacy/privacy.component';
import {TermsComponent} from './components/terms/terms.component';
import { MainComponent } from './components/main/main.component';
import { StatusComponent } from './components/status/status.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SiteRoutingModule,
    FormsModule
  ],
  declarations: [
    AboutComponent,
    ServicesComponent,
    ProjectsComponent,
    PlanComponent,
    ContactComponent,
    SingleComponent,
    PrivacyComponent,
    TermsComponent,
    MainComponent,
    StatusComponent
  ]
})
export class SiteModule {
}
