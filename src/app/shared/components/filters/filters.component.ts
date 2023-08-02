import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {debounceTime, Observable, Subscription} from "rxjs";
import {Select} from "@ngxs/store";
import {BreedsState} from "../../../../ngxs/state/breeds.state";
import {BreedData} from "../../../core/interfaces";
import {BreedsService} from "../../../core/services/breeds.service";
import {AnimalsService} from "../../../core/services/animals.service";

interface FiltersForm {
  countAnimals: FormControl<number>;
  selectedBreeds: FormControl<string[]>;
}

interface FiltersFormData {
  countAnimals: number;
  selectedBreeds: string[];
}

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit, OnDestroy {
  filtersForm: FormGroup<FiltersForm>

  @Select(BreedsState) breeds$: Observable<BreedData[]>;
  breeds: BreedData[];

  private breedsSubscription: Subscription;
  private FORM_CHANGE_DEBOUNCE_TIME_BEFORE_REQUEST: number = 1000 * 1.5 // 1.5s debounce time

  constructor(private breedsService: BreedsService, private animalsService: AnimalsService) {
    this.breedsSubscription = this.breeds$.subscribe({
      next: (breeds: BreedData[]) => {
        this.breeds = breeds
      }
    })

    this.filtersForm = new FormGroup<FiltersForm>({
      selectedBreeds: new FormControl<string[] | null>([], []),
      countAnimals: new FormControl<number | null>(this.animalsService.DEFAULT_COUNT_ANIMALS, [
        Validators.min(1)
      ])
    })

    this.filtersForm.valueChanges.pipe(debounceTime(this.FORM_CHANGE_DEBOUNCE_TIME_BEFORE_REQUEST)).subscribe({
      next: (formData: FiltersFormData) => {
        this.animalsService.getAnimals(formData.selectedBreeds, formData.countAnimals)
      }
    })
  }

  ngOnInit() {
    this.breedsService.getBreeds();
  }

  ngOnDestroy() {
    this.breedsSubscription?.unsubscribe()
  }
}
