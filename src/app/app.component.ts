import { Component } from '@angular/core';

@Component({
  selector: 'customer-database',
  template: ` <customer-table></customer-table>
              <info-table></info-table>
            `
})
export class AppComponent {}
// <info-table></info-table>
// <router-outlet></router-outlet> 
// <customer-table></customer-table>
// <router-outlet></router-outlet>