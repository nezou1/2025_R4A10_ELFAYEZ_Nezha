import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { Section1Component } from "./section1/section1.component";
import { CardComponent } from "./card/card.component";
import { CardListComponent } from "./card-list/card-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, Section1Component, CardComponent, CardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'tp2';
}
