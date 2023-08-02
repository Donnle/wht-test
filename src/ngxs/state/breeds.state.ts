import {Action, State, StateContext} from '@ngxs/store';
import {BreedData, IAction} from "../../app/core/interfaces";
import {SetBreeds} from "../actions/breeds.actions";


@State<BreedData[]>({
  name: 'breeds',
  defaults: []
})
export class BreedsState {

  @Action(SetBreeds)
  setBreeds(stateContext: StateContext<BreedData[]>, action: IAction<BreedData[]>) {
    stateContext.setState(action.payload)
  }
}
