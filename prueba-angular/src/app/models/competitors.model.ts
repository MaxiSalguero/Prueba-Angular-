export interface ICompetitor {
    cre_id: string;
    name: string;
    distance: number;
    location_x: string;
    location_y: string;
    brand: string;
    regular_selling_price: number | boolean;
    premium_selling_price: number | null;
    diesel_selling_price: number | null;
  }