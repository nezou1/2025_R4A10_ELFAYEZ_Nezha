export interface Pizza {
    id: string;
    name: string;
    slug: string;  // Ajout du slug
    image: string;
    description: string;
    ingredients: string[];
    price: number;
    rating: number;
  }
  