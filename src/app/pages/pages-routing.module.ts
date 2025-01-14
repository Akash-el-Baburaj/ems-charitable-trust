import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersComponent } from './members/members.component';
import { ItemReportComponent } from './item-report/item-report.component';

const routes: Routes = [
  { path: 'widgets', loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule) },
  { path: 'home', loadChildren: () => import ('./home/home.module').then(m => m.HomeModule) },
  { path: 'members', component: MembersComponent },
  { path: 'report', component: ItemReportComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
