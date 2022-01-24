import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './layouts/empty/empty.component';

import { DefaultComponent } from './layouts/default/default.component';
import { ReportsComponent } from './modules/reports/reports.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: ReportsComponent,
      },
      {
        path: 'reports',
        component: ReportsComponent,
      },
    ],
  },
  {
    path: '',
    component: EmptyComponent,
    children: [
      {
        path: 'demo',
        loadChildren: () => import('./modules/demo/demo.module').then((m) => m.DemoModule),
      },
    ],
  },
  { path: '**', redirectTo: '/reports' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
