import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const siteRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(siteRoutes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
