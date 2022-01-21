import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'reports', loadChildren: () => import('./reports/reports.module').then((m) => m.ReportsModule) },
  { path: 'demo', loadChildren: () => import('./demo/demo.module').then((m) => m.DemoModule) },
  { path: '**', redirectTo: '/reports' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
