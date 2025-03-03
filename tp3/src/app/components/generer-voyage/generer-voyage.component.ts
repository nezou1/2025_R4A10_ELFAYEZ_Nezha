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

    const indexDest = Math.floor(Math.random() * this.voyages.length);
    const indexDescr = Math.floor(Math.random() * this.voyages.length);
    const indexPrix = Math.floor(Math.random() * this.voyages.length);

    this.voyageAleatoire = {
      id: Date.now().toString(),
      destination: this.voyages[indexDest].destination,
      description: this.voyages[indexDescr].description,
      prix: this.voyages[indexPrix].prix
    };
  }

  ajout() {
    if (this.voyageAleatoire) {
      this.voyageService.ajouterVoyage(this.voyageAleatoire);
      this.voyageAleatoire = null;
    }
  }
}
