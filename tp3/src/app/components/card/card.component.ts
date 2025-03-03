import {Component, EventEmitter, Input, numberAttribute, Output} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-voyagecard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() destination!: string;
  @Input() description!: string;
  @Input() prix!: number;
  @Input({transform: numberAttribute}) id!: number;
 

  
}
