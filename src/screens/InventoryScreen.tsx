import { useMemo, useState } from 'react';
import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PLATFORMS } from '../platforms';
import type { Item } from '../types';

type Props = {
  items: Item[];
  onAdd: () => void;
};

const money = (n: number) => `$${n.toFixed(2)}`;

export default function InventoryScreen({ items, onAdd }: Props) {
  const [query, setQuery] = useState('');
  const [platform, setPlatform] = useState<string | null>(null);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter(
      (i) =>
        (!q || i.name.toLowerCase().includes(q)) &&
        (!platform || i.platforms.includes(platform)),
    );
  }, [items, query, platform]);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.title}>Inventory</Text>
        <Pressable onPress={onAdd} hitSlop={8}>
          <Text style={styles.add}>+ Add</Text>
        </Pressable>
      </View>

      <TextInput
        style={styles.search}
        value={query}
        onChangeText={setQuery}
        placeholder="Search items"
        clearButtonMode="while-editing"
      />

      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filters}
        >
          {[null, ...PLATFORMS].map((p) => {
            const on = platform === p;
            return (
              <Pressable
                key={p ?? 'all'}
                onPress={() => setPlatform(p)}
                style={[styles.chip, on && styles.chipOn]}
              >
                <Text style={[styles.chipText, on && styles.chipTextOn]}>{p ?? 'All'}</Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>

      <FlatList
        data={visible}
        keyExtractor={(i) => i.id}
        contentContainerStyle={visible.length === 0 ? styles.emptyWrap : undefined}
        ListEmptyComponent={
          <Text style={styles.empty}>
            {items.length === 0
              ? 'No items yet. Tap + Add to log your first one.'
              : 'No items match your search or filter.'}
          </Text>
        }
        renderItem={({ item }) => (
          <View style={styles.row}>
            <View style={styles.rowTop}>
              <Text style={styles.name} numberOfLines={1}>
                {item.name}
              </Text>
              <Text style={styles.cost}>{money(item.cost)}</Text>
            </View>
            <Text style={styles.meta}>
              {item.status === 'sold' ? 'Sold' : 'In stock'} · bought {item.dateBought}
            </Text>
            <Text style={styles.meta}>
              {item.platforms.length > 0 ? item.platforms.join(', ') : 'Not listed yet'}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
  },
  title: { fontSize: 28, fontWeight: '700' },
  add: { fontSize: 17, color: '#0a6cff', fontWeight: '600' },
  search: {
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  filters: { paddingHorizontal: 16, paddingVertical: 12, gap: 8 },
  chip: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  chipOn: { backgroundColor: '#0a6cff', borderColor: '#0a6cff' },
  chipText: { fontSize: 14, color: '#333' },
  chipTextOn: { color: '#fff' },
  row: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#ddd',
  },
  rowTop: { flexDirection: 'row', justifyContent: 'space-between', gap: 12 },
  name: { fontSize: 17, fontWeight: '600', flex: 1 },
  cost: { fontSize: 17 },
  meta: { fontSize: 13, color: '#666', marginTop: 2 },
  emptyWrap: { flexGrow: 1, justifyContent: 'center' },
  empty: { textAlign: 'center', color: '#666', paddingHorizontal: 32, fontSize: 15 },
});
