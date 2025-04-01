export interface Order {
  id?: number;
  userId?: number;
  username?: string;
  productId: number;
  productDescription?: string;
  quantity: number;
  orderDate?: Date;
  paid: boolean;
  delivered: boolean;
}
