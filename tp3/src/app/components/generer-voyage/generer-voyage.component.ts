import { Component, OnInit } from '@angular/core';
import { VoyageService } from '../../services/voyage.service';
import { Voyage } from "../../services/voyage.type";

@Component({
  selector: 'app-generer-voyage',
  standalone: true,
  templateUrl: './generer-voyage.component.html',
  styleUrls: ['./generer-voyage.component.sass']
})
export class GenererVoyageComponent implements OnInit {
  voyages: Voyage[] = [];
  voyageAleatoire: Voyage | null = null;

  constructor(private voyageService: VoyageService) {}

  ngOnInit() {
    this.voyages = this.voyageService.getVoyage();
  }

  genererVoyage() {
    if (this.voyages.length === 0) {
      return;
    }

    const randomIndexDestination = Math.floor(Math.random() * this.voyages.length);
    const randomIndexDescription = Math.floor(Math.random() * this.voyages.length);
    const randomIndexPrix = Math.floor(Math.random() * this.voyages.length);

    this.voyageAleatoire = {
      id: Date.now().toString(),
      destination: this.voyages[randomIndexDestination].destination,
      description: this.voyages[randomIndexDescription].description,
      prix: this.voyages[randomIndexPrix].prix
    };
  }

  validerAjout() {
    if (this.voyageAleatoire) {
      this.voyageService.ajouterVoyage(this.voyageAleatoire);
      this.voyageAleatoire = null;
    }
  }

  supprimerVoyage() {
    this.voyageAleatoire = null;
  }
}
