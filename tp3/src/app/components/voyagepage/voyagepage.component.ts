// voyagepage.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VoyageService } from '../../services/voyage.service';

@Component({
  selector: 'app-voyagepage',
  standalone: true,
  imports: [],
  templateUrl: './voyagepage.component.html',
  styleUrls: ['./voyagepage.component.css']
})
export class VoyagepageComponent implements OnInit {
  destination!: string;
  description!: string;
  prix!: number;
  id!: number;
  isModalOpen: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private voyageservice: VoyageService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
      if (!isNaN(this.id)) {
        let voyage = this.voyageservice.getVoyageById(this.id);
        if (voyage) {
          this.destination = voyage.destination;
          this.description = voyage.description;
          this.prix = voyage.prix;
        }
      }
    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  confirmSuprimmer() {
    this.voyageservice.suprimmerVoyage(this.id);
    this.router.navigate(['voyages']).then(() => {
      this.closeModal();
    });
  }

  retour() {
    this.router.navigate(['voyages']);
  }
}
