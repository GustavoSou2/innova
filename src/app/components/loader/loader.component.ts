import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {
  private isLoading = true;
  get loader() {
    return this.isLoading;
  }

  set loader(value: boolean) {
    this.isLoading = value;
  }

  constructor(private loaderService: LoaderService) {
    this.loaderService.$state.subscribe((state) => {
      this.loader = state;
    });
  }
}
