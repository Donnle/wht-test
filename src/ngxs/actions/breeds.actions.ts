import {BREED_ACTIONS} from "../../app/core/enums";
import {BreedData} from "../../app/core/interfaces";

export class SetBreeds {
  static readonly type = BREED_ACTIONS.SET_BREEDS

  constructor(public payload: BreedData[]) {
  }
}
