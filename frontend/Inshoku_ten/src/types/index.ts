export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Category {
  id: number;
  name: string;
  products?: Product[];
}

export interface Product {
  id: number;
  category_id: number;
  name: string;
  description: string;
  price: number;
  image?: string;
  category?: Category;
}

export interface Order {
  id: number;
  user_id: number;
  total_price: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'completed' | 'cancelled';
  user?: User;
  items?: OrderItem[];
}

export interface OrderItem {
  id: number;
  order_id: number;
  product_id: number;
  quantity: number;
  price: number;
  order?: Order;
  product?: Product;
}

export interface Reservation {
  name: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  notes?: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}