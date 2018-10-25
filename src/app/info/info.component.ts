import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'info-table',
  templateUrl: './info.component.html',
})
export class InfoComponent implements OnInit {
  customerSlug: string = ""; // slug instance variable of InfoComponent
  customer:any;
  customers = {
    'henry-gerard':
    ["Henry", "Gerard", 21, 'Livershool', 'Male', '3123', 'India', 'TN'],
    'michael-platini':
    ["Michael", "Platini", 40, 'Czecha', 'Male', '3198', 'USA', 'SF'],
    'louis-figo':
    ["Louis", "Figo", 37, 'Reala Madrida', 'Male', '3176', 'France', 'PA'],
    'cristiana-ronaldinho':
    ["Cristiana", "Ronaldinho", 15, 'Portugalia', 'Female', '3178', 'Portugal', 'LB'],
    'leonardo-messiah':
    ["Leonardo", "Messiah", 25, 'Barceloja', 'Female', '3165', 'Argentina', 'BA']
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router
  )
   {
  }
  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.customerSlug = params.get('slug')))
     console.log(this.customerSlug);
     this.customer = this.customers[this.customerSlug];
  }
}
