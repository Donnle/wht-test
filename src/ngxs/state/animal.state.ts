import {Injectable} from "@angular/core";
import {Action, State, StateContext} from '@ngxs/store';
import {SetAnimals} from "../actions/animal.actions";
import {AnimalData, IAction} from "../../app/core/interfaces";

@State<AnimalData[]>({
  name: 'animals',
  defaults: []
})
@Injectable()
export class AnimalState {

  @Action(SetAnimals)
  setAnimals(stateContext: StateContext<AnimalData>, action: IAction<AnimalData>) {
    stateContext.setState(action.payload);
  }
}
