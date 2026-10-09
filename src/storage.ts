import AsyncStorage from '@react-native-async-storage/async-storage';
import type { Item, NewItem } from './types';

const KEY = 'stockroom.items.v1';

export async function loadItems(): Promise<Item[]> {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Item[]) : [];
  } catch {
    return [];
  }
}

export async function saveItems(items: Item[]): Promise<void> {
  await AsyncStorage.setItem(KEY, JSON.stringify(items));
}

export function createItem(n: NewItem): Item {
  return {
    ...n,
    id: `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`,
    status: 'in_stock',
    createdAt: Date.now(),
  };
}
