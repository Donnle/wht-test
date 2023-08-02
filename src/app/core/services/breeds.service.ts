import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Store} from "@ngxs/store";
import {BreedData} from "../interfaces";
import {SetBreeds} from "../../../ngxs/actions/breeds.actions";

@Injectable({
  providedIn: 'root'
})
export class BreedsService {
  constructor(
    private http: HttpClient,
    private store: Store
  ) {
  }

  getBreeds() {
    this.getBreedsRequest().subscribe({
      next: (breeds: BreedData[]) => {
        this.store.dispatch(new SetBreeds(breeds))
      }
    })
  }

  private getBreedsRequest(): Observable<BreedData[]> {
    return this.http.get<BreedData[]>('https://api.thecatapi.com/v1/breeds')
  }
}
