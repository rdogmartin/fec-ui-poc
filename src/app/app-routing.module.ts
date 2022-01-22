import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';

import { MainComponent } from './layouts/main/main.component';
import { ReportsComponent } from './modules/reports/reports.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
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
    component: DefaultComponent,
    children: [
      {
        path: 'demo',
        loadChildren: () => import('./modules/demo/demo.module').then((m) => m.DemoModule),
      },
    ],
  },
  // { path: 'demo', loadChildren: () => import('./modules/demo/demo.module').then((m) => m.DemoModule) },
  { path: '**', redirectTo: '/reports' },
];

// const routes: Routes = [
//   { path: 'reports', loadChildren: () => import('./reports/reports.module').then((m) => m.ReportsModule) },
//   { path: 'demo', loadChildren: () => import('./modules/demo/demo.module').then((m) => m.DemoModule) },
//   { path: '**', redirectTo: '/reports' },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
