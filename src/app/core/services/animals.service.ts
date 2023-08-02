import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Store} from "@ngxs/store";
import {Observable} from "rxjs";
import {HeadersService} from "./headers.service";
import {AnimalData} from "../interfaces";
import {SetAnimals} from "../../../ngxs/actions/animal.actions";

@Injectable({
  providedIn: 'root'
})
export class AnimalsService {
  public readonly DEFAULT_COUNT_ANIMALS: number = 10

  constructor(
    private http: HttpClient,
    private headersService: HeadersService,
    private store: Store
  ) {
  }

  getAnimals(breeds: string[] = [], countAnimals: number = this.DEFAULT_COUNT_ANIMALS) {
    this.getAnimalsRequest(breeds, countAnimals).subscribe({
      next: (animals: AnimalData[]) => {
        this.store.dispatch(new SetAnimals(animals))
      }
    })
  }

  private getAnimalsRequest(breeds: string[], countAnimals: number): Observable<AnimalData[]> {
    return this.http.get<AnimalData[]>('https://api.thecatapi.com/v1/images/search', {
      params: {
        breed_ids: breeds,
        limit: countAnimals
      },
      headers: this.headersService.animalsHeaders()
    })
  }
}
