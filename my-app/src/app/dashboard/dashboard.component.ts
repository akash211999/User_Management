import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  router: any;
  users: { name: string; dob: string; email: string; role: string; status: string; }[];
  static parameters: (typeof Router)[];
  constructor(router: any) {
    this.router = router;
    this.users = [
      { name: 'Michael Holz', dob: '04/10/2013', email: 'michael@example.com', role: 'Admin', status: 'Active' },
      { name: 'Paula Wilson', dob: '05/08/2014', email: 'paula@example.com', role: 'Publisher', status: 'Active' },
      { name: 'Antonio Moreno', dob: '11/05/2015', email: 'antonio@example.com', role: 'Publisher', status: 'Suspended' },
      { name: 'Mary Saveley', dob: '06/09/2016', email: 'mary@example.com', role: 'Reviewer', status: 'Active' },
      { name: 'Martin Sommer', dob: '12/08/2017', email: 'martin@example.com', role: 'Moderator', status: 'Inactive' }
    ];
  }

  ngOnInit() {
    const user = localStorage.getItem('user');
    if (!user) {
      this.router.navigate(['/login']);
    }
  }
}
DashboardComponent.parameters = [Router];