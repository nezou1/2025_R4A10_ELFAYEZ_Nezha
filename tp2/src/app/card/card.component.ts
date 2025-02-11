import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() title : string = "titre";
  @Input() description : string = "description";
  @Input() imageUrl : string = "/assets/loop.png";
  
}
