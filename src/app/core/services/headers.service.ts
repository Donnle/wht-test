import {Injectable} from '@angular/core';
import {HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeadersService {
  private readonly ANIMALS_API_KEY: string = 'live_poBjhBzFhTKayIPlmkNukAN3KXUZYDbb49RBUgvwgyouMopKFpR580pMVFvfvfBl'

  constructor() {
  }

  animalsHeaders() {
    return new HttpHeaders().set('x-api-key', this.ANIMALS_API_KEY)
  }
}
