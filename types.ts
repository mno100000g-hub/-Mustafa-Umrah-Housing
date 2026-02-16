
export interface Hotel {
  id: string;
  name: string;
  city: 'Mecca' | 'Medina';
  rating: number;
  distanceToHaram: number; // in meters
  pricePerNight: number;
  image: string;
  amenities: string[];
  description: string;
}

export interface SearchParams {
  city: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
