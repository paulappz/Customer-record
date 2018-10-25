import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'customer-table',
  templateUrl: './table.component.html',
})
export class TableComponent {

  selectedSlug: string = "";
  constructor(private route: ActivatedRoute,
    private router: Router) { }
  customers = [
    { firstName: "Henry", lastName: "Gerard", age: 21, slug: 'henry-gerard' },
    { firstName: "Michael", lastName: "Platini", age: 40, slug: 'michael-platini' },
    { firstName: "Louis", lastName: "Figo", age: 37, slug: 'louis-figo' },
    { firstName: "Cristiana", lastName: "Ronaldinho", age: 15, slug: 'cristiana-ronaldinho' },
    { firstName: "Leonardo", lastName: "Messiah", age: 25, slug: 'leonardo-messiah' }
  ]

  setSlug(slug) {
    // slug setter function
    this.selectedSlug = slug;
    this.router.navigate(['customer-info', slug]);
  }

  getSlug() {
    // slug getter function 
      return this.selectedSlug;
  }
}
