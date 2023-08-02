import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {Select} from '@ngxs/store';
import {AnimalState} from "../../../../ngxs/state/animal.state";
import {AnimalData} from "../../../core/interfaces";
import {AnimalsService} from "../../../core/services/animals.service";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit, OnDestroy {
  @Select(AnimalState) animals$: Observable<AnimalData[]>;
  animals: AnimalData[]

  private animalsSubscription: Subscription;

  constructor(private animalsService: AnimalsService) {
    this.animalsSubscription = this.animals$.subscribe({
      next: (animals: AnimalData[]) => {
        this.animals = animals
      }
    })
  }

  ngOnInit() {
    this.animalsService.getAnimals();
  }

  ngOnDestroy() {
    this.animalsSubscription?.unsubscribe()
  }
}
