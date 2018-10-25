import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';
import { TableComponent } from './table/table.component';
import { InfoComponent } from './info/info.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
    {
      path: 'customers',
      component: TableComponent
     },
     {
      path: 'customer-info/:slug',
      component: InfoComponent
    },
    { path: '',
    //   redirectTo: '/customers',
    component: AppComponent,
      pathMatch: 'full'
    },
  ];

  @NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}



