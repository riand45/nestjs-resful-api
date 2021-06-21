export interface Barbermans {
  id: string;
  name: string;
  status: number;
  price: number;
  price_discount: number;
  location_id: number;
  service: number;
  email: string;
  photo: string;
}

export interface UpdateBarbermanPayload {
  id?: string;
  name?: string;
  status?: number;
  price?: number;
  price_discount?: number;
  location_id?: number;
  service?: number;
  email?: string;
  photo?: string;
}