export interface IProduct {
  _id: string;
  name: string;
  price: number;
  category: {
    _id: string;
    name: string;
  };
  description?: string;
  image: {
    id: string;
    name: string;
    webUrl: string;
  };
}
