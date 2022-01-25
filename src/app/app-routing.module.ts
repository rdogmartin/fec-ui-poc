import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyComponent } from './layouts/empty/empty.component';

import { DefaultComponent } from './layouts/default/default.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/reports/reports.module').then((m) => m.RepoortsModule),
      },
      {
        path: 'reports',
        loadChildren: () => import('./modules/reports/reports.module').then((m) => m.RepoortsModule),
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
