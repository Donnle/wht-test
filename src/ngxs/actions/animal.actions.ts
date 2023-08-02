import {ANIMALS_ACTIONS} from '../../app/core/enums'
import {AnimalData} from "../../app/core/interfaces";

export class SetAnimals {
  static readonly type = ANIMALS_ACTIONS.SET_ANIMALS

  constructor(public payload: AnimalData[]) {
  }
}
