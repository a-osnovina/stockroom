export type ItemStatus = 'in_stock' | 'sold';

export type Item = {
  id: string;
  name: string;
  cost: number; // what you paid, in dollars
  dateBought: string; // YYYY-MM-DD
  platforms: string[]; // where it is listed
  status: ItemStatus;
  createdAt: number;
};

export type NewItem = Pick<Item, 'name' | 'cost' | 'dateBought' | 'platforms'>;
