export type Language = 'EN' | 'HA';

export enum Category {
  NOMA = 'Kayan Noma', // Crops
  KIWO = 'Kayan Kiwo', // Livestock
  AIKI = 'Kayan Aiki', // Tools
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: Category;
  location: string;
  description: string;
  imageUrl: string;
  sellerName: string;
  sellerPhone: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Translation {
  nav_home: string;
  nav_market: string;
  nav_sell: string;
  nav_cart: string;
  nav_login: string;
  hero_title: string;
  hero_subtitle: string;
  hero_cta: string;
  cat_noma: string;
  cat_kiwo: string;
  cat_aiki: string;
  btn_add_cart: string;
  btn_contact_seller: string;
  search_placeholder: string;
  filter_all: string;
  price_naira: string;
  footer_text: string;
  sell_page_title: string;
  form_name: string;
  form_price: string;
  form_location: string;
  form_desc: string;
  form_submit: string;
  cart_empty: string;
  cart_total: string;
  cart_checkout: string;
  login_title: string;
  login_btn: string;
}