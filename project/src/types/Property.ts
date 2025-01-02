export interface Property {
  id: number;
  type: 'house' | 'flat';
  price: number;
  bedrooms: number;
  dateAdded: string;
  postcode: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  images: string[];
  floorPlan: string;
  location: {
    lat: number;
    lng: number;
  };
}