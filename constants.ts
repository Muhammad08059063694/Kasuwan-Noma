import { Category, Product, Translation } from './types';

export const NIGERIAN_STATES = [
  "Abuja", "Adamawa", "Bauchi", "Benue", "Borno", "Gombe", "Jigawa", "Kaduna", 
  "Kano", "Katsina", "Kebbi", "Nasarawa", "Niger", "Plateau", "Sokoto", 
  "Taraba", "Yobe", "Zamfara", "Lagos", "Oyo"
];

export const TRANSLATIONS: Record<'EN' | 'HA', Translation> = {
  EN: {
    nav_home: "Home",
    nav_market: "Market",
    nav_sell: "Sell Produce",
    nav_cart: "Cart",
    nav_login: "Login",
    hero_title: "Connecting Farmers & Buyers Across Nigeria",
    hero_subtitle: "The trusted marketplace for livestock, crops, and farm tools.",
    hero_cta: "Start Shopping",
    cat_noma: "Crops & Seeds (Noma)",
    cat_kiwo: "Livestock (Kiwo)",
    cat_aiki: "Farm Tools (Aiki)",
    btn_add_cart: "Add to Cart",
    btn_contact_seller: "WhatsApp Seller",
    search_placeholder: "Search for yam, cattle, fertilizer...",
    filter_all: "All Categories",
    price_naira: "₦",
    footer_text: "© 2024 Kasuwar Noma & Kiwo. Empowering Nigerian Agriculture.",
    sell_page_title: "Sell Your Produce",
    form_name: "Product Name",
    form_price: "Price (₦)",
    form_location: "Location (State)",
    form_desc: "Description",
    form_submit: "Post Product",
    cart_empty: "Your cart is empty.",
    cart_total: "Total",
    cart_checkout: "Checkout via WhatsApp",
    login_title: "Login to Your Account",
    login_btn: "Login",
  },
  HA: {
    nav_home: "Gida",
    nav_market: "Kasuwa",
    nav_sell: "Sayarwa",
    nav_cart: "Kwando",
    nav_login: "Shiga",
    hero_title: "Hada Manoma da Masu Saye a Najeriya",
    hero_subtitle: "Kasuwar da aka amince da ita don dabbobi, amfanin gona, da kayan aiki.",
    hero_cta: "Fara Siyayya",
    cat_noma: "Kayan Noma",
    cat_kiwo: "Kayan Kiwo",
    cat_aiki: "Kayan Aiki",
    btn_add_cart: "Sanya a Kwando",
    btn_contact_seller: "Yi Magana a WhatsApp",
    search_placeholder: "Nemi doya, shanu, ko taki...",
    filter_all: "Duk Rukuni",
    price_naira: "₦",
    footer_text: "© 2024 Kasuwar Noma & Kiwo. Inganta Noman Najeriya.",
    sell_page_title: "Sayar da Kayan Ka",
    form_name: "Sunan Kaya",
    form_price: "Farashi (₦)",
    form_location: "Wuri (Jiha)",
    form_desc: "Bayani",
    form_submit: "Sanya Kaya",
    cart_empty: "Kwandonsa babu komai.",
    cart_total: "Jimla",
    cart_checkout: "Biya ta WhatsApp",
    login_title: "Shiga Asusunka",
    login_btn: "Shiga",
  }
};

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Tubers of Yam (Doya)',
    price: 5000,
    category: Category.NOMA,
    location: 'Benue',
    description: 'High quality big yams directly from the farm. Sold in bundles of 5.',
    imageUrl: 'https://picsum.photos/id/292/400/300',
    sellerName: 'Musa Ibrahim',
    sellerPhone: '2348000000001'
  },
  {
    id: '2',
    name: 'Sokoto Gudali Bull',
    price: 350000,
    category: Category.KIWO,
    location: 'Sokoto',
    description: 'Healthy and strong bull, perfect for breeding or meat. 3 years old.',
    imageUrl: 'https://picsum.photos/id/1074/400/300', // Lion placeholder, imagine its a bull
    sellerName: 'Alhaji Tanko',
    sellerPhone: '2348059063694'
  },
  {
    id: '3',
    name: 'NPK Fertilizer 15-15-15',
    price: 28000,
    category: Category.NOMA,
    location: 'Kano',
    description: 'Original NPK fertilizer, 50kg bag. Good for maize and rice.',
    imageUrl: 'https://picsum.photos/id/403/400/300', // placeholder
    sellerName: 'Agro Allied Ltd',
    sellerPhone: '2348000000003'
  },
  {
    id: '4',
    name: 'Local Goats (Male & Female)',
    price: 45000,
    category: Category.KIWO,
    location: 'Katsina',
    description: 'Healthy goats available for Sallah or rearing.',
    imageUrl: 'https://picsum.photos/id/1003/400/300', // Deer placeholder -> Goat
    sellerName: 'Yakubu Sani',
    sellerPhone: '2348000000004'
  },
  {
    id: '5',
    name: 'Water Pump Machine',
    price: 65000,
    category: Category.AIKI,
    location: 'Kaduna',
    description: '3-inch water pump for irrigation farming. Fuel efficient.',
    imageUrl: 'https://picsum.photos/id/250/400/300', // Camera -> Machine
    sellerName: 'Modern Farm Tools',
    sellerPhone: '2348000000005'
  },
  {
    id: '6',
    name: 'Hybrid Maize Seeds',
    price: 4000,
    category: Category.NOMA,
    location: 'Plateau',
    description: 'Drought resistant maize seeds. 2kg pack.',
    imageUrl: 'https://picsum.photos/id/360/400/300', // Flowers -> Crops
    sellerName: 'Green Earth',
    sellerPhone: '2348000000006'
  }
];