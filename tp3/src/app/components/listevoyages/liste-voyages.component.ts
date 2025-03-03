import {Component, OnInit} from '@angular/core';
import { CardComponent } from "../card/card.component";
import { VoyageService } from "../../services/voyage.service";
import { Voyage } from "../../services/voyage.type";

@Component({
  selector: 'app-voyagespage',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './liste-voyages.component.html',
  styleUrls: ['./liste-voyages.component.css']
})
export class VoyagesPageComponent implements OnInit {
  listeVoyage: Voyage[];
  currentPage: number = 0;
  pageSize: number = 20;
  totalPages: number = 0;

  constructor(private voyageService: VoyageService) {
    this.listeVoyage = this.voyageService.getVoyage();
  }
  ngOnInit() {
    this.listeVoyage = this.voyageService.getVoyagesPage(this.currentPage, this.pageSize);
    this.totalPages = Math.max(1,Math.ceil(this.voyageService.getVoyage().length / this.pageSize));
  }

  suprimmerElement(id: number) {
    this.voyageService.suprimmerVoyage(id);
    this.listeVoyage = this.voyageService.getVoyagesPage(this.currentPage, this.pageSize);
    this.totalPages = Math.max(1,Math.ceil(this.voyageService.getVoyage().length / this.pageSize));
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.updateVoyages();
    }
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updateVoyages();
    }
  }

  updateVoyages() {
    this.listeVoyage = this.voyageService.getVoyagesPage(this.currentPage, this.pageSize);
  }

}
