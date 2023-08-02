import {Component} from '@angular/core';
import {LoaderService} from "../../../core/services/loader.service";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  isLoading: boolean;

  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe({
      next: (isLoading) => {
        this.isLoading = isLoading
      }
    })
  }
}
