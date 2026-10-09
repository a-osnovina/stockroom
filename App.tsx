import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import AddItemScreen from './src/screens/AddItemScreen';
import InventoryScreen from './src/screens/InventoryScreen';
import { createItem, loadItems, saveItems } from './src/storage';
import type { Item, NewItem } from './src/types';

export default function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [screen, setScreen] = useState<'list' | 'add'>('list');

  useEffect(() => {
    loadItems().then((stored) => {
      setItems(stored);
      setLoaded(true);
    });
  }, []);

  const handleSave = async (newItem: NewItem) => {
    const next = [createItem(newItem), ...items];
    setItems(next);
    setScreen('list');
    await saveItems(next);
  };

  // Avoid flashing the empty state (or overwriting saved data) before the load finishes.
  if (!loaded) return null;

  return (
    <>
      <StatusBar style="dark" />
      {screen === 'add' ? (
        <AddItemScreen onSave={handleSave} onCancel={() => setScreen('list')} />
      ) : (
        <InventoryScreen items={items} onAdd={() => setScreen('add')} />
      )}
    </>
  );
}
