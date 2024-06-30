import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

const menu = [
  {
    name: 'Overview',
    path: 'overview',
    icon: 'fa-solid fa-cube',
  },
  {
    name: 'Projects',
    path: 'projects',
    icon: 'fa-solid fa-square-minus',
  },
  {
    name: 'Calendar',
    path: 'calendar',
    icon: 'fa-solid fa-calendar',
  },
  {
    name: 'Analytics',
    path: 'analytics',
    icon: 'fa-solid fa-chart-pie',
  },
  {
    name: 'Reports',
    path: 'reports',
    icon: 'fa-solid fa-chart-line',
  },
];

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './company.component.html',
  styleUrl: './company.component.scss',
})
export class CompanyComponent {
  companyName!: string;

  menu = menu;

  constructor(private router: ActivatedRoute) {}

  ngOnInit() {
    const companyName = this.router.snapshot.paramMap.get('companyName');

  }
}
