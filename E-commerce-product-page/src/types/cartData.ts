interface CartItem {
  name: string;
  price: number;
  quantity: number;
  total: number;
  imageUrl : string
}

interface Product {
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  imageUrl : string
}

interface ShoppingCartData {
  cart: CartItem[];
  product: Product;
}

export type {ShoppingCartData,CartItem}
