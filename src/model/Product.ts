export type Product = {
  UPC: string;
  name: string;
  imageUrl: string;
  price: {
    current: {
      value: number;
    };
    currency: string;
  };
  availability: {
    stock: number;
  };
};