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

export interface BarbermanQuery {
  set: string,
  queryBind?: BindUpdate
}

interface BindUpdate {
  name?: string;
  status?: number;
  price?: number;
  price_discount?: number;
  location_id?: number;
  service?: number;
  email?: string;
  photo?: string;
}