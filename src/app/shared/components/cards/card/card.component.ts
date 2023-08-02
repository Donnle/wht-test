import {Component, Input} from '@angular/core';
import {AnimalData} from "../../../../core/interfaces";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() animalData: AnimalData;
}
