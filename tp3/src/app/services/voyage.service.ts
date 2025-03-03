import { Injectable } from '@angular/core';
import { Voyage } from "./voyage.type";

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  liste_voyages: Voyage[];

  constructor() {
    const storedVoyages = localStorage.getItem('liste_voyages');
    this.liste_voyages = storedVoyages ? JSON.parse(storedVoyages) : this.getInitialVoyages();
  }

  private getInitialVoyages(): Voyage[] {
    return [
      { id: "1", destination: "Paris, France", description: "Explorez la Ville Lumière et sa tour Eiffel.", prix: 1200 },
      { id: "2", destination: "Tokyo, Japon", description: "Découvrez la culture japonaise et sa gastronomie.", prix: 2500 },
      { id: "3", destination: "New York, USA", description: "Visitez Times Square et Central Park.", prix: 1800 },
      { id: "4", destination: "Rome, Italie", description: "Découvrez l'histoire romaine et le Colisée.", prix: 1400 },
      { id: "5", destination: "Bangkok, Thaïlande", description: "Parcourez les temples et les marchés flottants.", prix: 1100 },
      { id: "6", destination: "Londres, Royaume-Uni", description: "Admirez Big Ben et le Tower Bridge.", prix: 1500 },
      { id: "7", destination: "Barcelone, Espagne", description: "Profitez des plages et de l'architecture de Gaudí.", prix: 1350 },
      { id: "8", destination: "Dubai, Émirats", description: "Vivez le luxe et explorez le désert.", prix: 3000 },
      { id: "9", destination: "Sydney, Australie", description: "Visitez l'Opéra et la plage de Bondi.", prix: 2700 },
      { id: "10", destination: "Rio de Janeiro, Brésil", description: "Assistez au carnaval et montez au Christ Rédempteur.", prix: 1600 },
      { id: "11", destination: "Bali, Indonésie", description: "Détendez-vous sur des plages paradisiaques.", prix: 1300 },
      { id: "12", destination: "Le Caire, Égypte", description: "Admirez les pyramides et le Sphinx.", prix: 1450 },
      { id: "13", destination: "Los Angeles, USA", description: "Découvrez Hollywood et Venice Beach.", prix: 2200 },
      { id: "14", destination: "Istanbul, Turquie", description: "Visitez la Mosquée Bleue et le Grand Bazar.", prix: 1250 },
      { id: "15", destination: "Singapour", description: "Explorez Marina Bay Sands et ses jardins futuristes.", prix: 2000 },
      { id: "16", destination: "Marrakech, Maroc", description: "Plongez dans les souks et les palais historiques.", prix: 1000 },
      { id: "17", destination: "Berlin, Allemagne", description: "Découvrez l'histoire du mur de Berlin.", prix: 1400 },
      { id: "18", destination: "Athènes, Grèce", description: "Explorez l'Acropole et la mythologie grecque.", prix: 1250 },
      { id: "19", destination: "San Francisco, USA", description: "Traversez le Golden Gate et explorez Alcatraz.", prix: 2100 },
      { id: "20", destination: "Prague, République Tchèque", description: "Admirez l'architecture médiévale et le pont Charles.", prix: 1100 },
      { id: "21", destination: "Montréal, Canada", description: "Découvrez une ville dynamique et francophone.", prix: 1600 },
      { id: "22", destination: "Venise, Italie", description: "Naviguez sur les canaux en gondole.", prix: 1700 },
      { id: "23", destination: "Séoul, Corée du Sud", description: "Découvrez la K-pop et les palais historiques.", prix: 2300 },
      { id: "24", destination: "Amsterdam, Pays-Bas", description: "Visitez les musées et explorez les canaux.", prix: 1400 },
      { id: "25", destination: "Buenos Aires, Argentine", description: "Plongez dans la culture du tango.", prix: 1700 },
      { id: "26", destination: "Oslo, Norvège", description: "Découvrez les fjords et l'ambiance nordique.", prix: 2500 },
      { id: "27", destination: "Lima, Pérou", description: "Dégustez la cuisine péruvienne et explorez la ville.", prix: 1500 },
      { id: "28", destination: "Cap Town, Afrique du Sud", description: "Admirez la montagne de la Table.", prix: 1900 },
      { id: "29", destination: "Hanoï, Vietnam", description: "Découvrez la culture vietnamienne et sa cuisine.", prix: 1200 },
      { id: "30", destination: "Helsinki, Finlande", description: "Explorez la capitale nordique et ses îles.", prix: 2300 },
      { id: "31", destination: "Québec, Canada", description: "Découvrez une ville historique et festive.", prix: 1600 },
      { id: "32", destination: "Mexico, Mexique", description: "Explorez la culture aztèque et coloniale.", prix: 1400 },
      { id: "33", destination: "Colombo, Sri Lanka", description: "Visitez les temples et plages magnifiques.", prix: 1800 },
      { id: "34", destination: "Dublin, Irlande", description: "Découvrez les pubs et la culture celtique.", prix: 1450 },
      { id: "35", destination: "Stockholm, Suède", description: "Naviguez entre les îles et explorez Gamla Stan.", prix: 2200 },
      { id: "36", destination: "Kuala Lumpur, Malaisie", description: "Admirez les tours Petronas et la ville moderne.", prix: 1400 },
      { id: "37", destination: "Edimbourg, Écosse", description: "Visitez le château et explorez les Highlands.", prix: 1500 },
      { id: "38", destination: "Reykjavik, Islande", description: "Découvrez les aurores boréales et les geysers.", prix: 2800 },
      { id: "39", destination: "Hobart, Tasmanie", description: "Explorez la nature sauvage de la Tasmanie.", prix: 2600 },
      { id: "40", destination: "Manille, Philippines", description: "Découvrez l'archipel aux 7000 îles.", prix: 1300 }
    ];
  }

  getVoyageById(id: number): Voyage | undefined {
    return this.liste_voyages.find(voyage_liste => parseInt(voyage_liste.id) === id);
  }

  getVoyage() {
    return this.liste_voyages;
  }

  getVoyagesPage(page: number, pageSize: number): Voyage[] {
    const startIndex = page * pageSize;
    return this.liste_voyages.slice(startIndex, startIndex + pageSize);
  }

  suprimmerVoyage(id: number) {
    const index = this.liste_voyages.findIndex(voyage => parseInt(voyage.id) === id);
    if (index !== -1) {
      this.liste_voyages.splice(index, 1);
      localStorage.setItem('liste_voyages', JSON.stringify(this.liste_voyages)); // Mettre à jour le localStorage
    }
  }

  ajouterVoyage(nouveauVoyage: Voyage) {
    this.liste_voyages.push(nouveauVoyage);
    localStorage.setItem('liste_voyages', JSON.stringify(this.liste_voyages)); // Mettre à jour le localStorage
  }

}
