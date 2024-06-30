import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  companyName!: string;

  constructor(private router: ActivatedRoute) {
  }

  ngOnInit() {
    const companyName = this.router.snapshot.paramMap.get('companyName');

    console.log(companyName);
  }
}
