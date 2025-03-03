import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { VoyagesPageComponent } from './components/listevoyages/liste-voyages.component';
import { VoyagepageComponent } from './components/voyagepage/voyagepage.component';
import { GenererVoyageComponent } from './components/generer-voyage/generer-voyage.component';
export const routes: Routes = [
    {
        component: HomepageComponent,
        path: "home"
    },
    {
        component: VoyagesPageComponent,
        path: "voyages"
    },
    {
        component: VoyagepageComponent,
        path: "pagevoyage/:id"
    },
    {
        component: GenererVoyageComponent,
        path: "generer-voyage"
    },
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
];
