import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PLATFORMS } from '../platforms';
import type { NewItem } from '../types';

type Props = {
  onSave: (item: NewItem) => void;
  onCancel: () => void;
};

function todayLocal(): string {
  const d = new Date();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${m}-${day}`;
}

function isValidDate(s: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  const [y, m, d] = s.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  return date.getFullYear() === y && date.getMonth() === m - 1 && date.getDate() === d;
}

export default function AddItemScreen({ onSave, onCancel }: Props) {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [dateBought, setDateBought] = useState(todayLocal());
  const [platforms, setPlatforms] = useState<string[]>([]);

  const togglePlatform = (p: string) =>
    setPlatforms((cur) => (cur.includes(p) ? cur.filter((x) => x !== p) : [...cur, p]));

  const submit = () => {
    const trimmed = name.trim();
    const costNum = Number(cost.replace(',', '.'));
    if (!trimmed) return Alert.alert('Name needed', 'Enter what the item is.');
    if (cost.trim() === '' || !Number.isFinite(costNum) || costNum < 0)
      return Alert.alert('Cost needed', 'Enter what you paid, e.g. 12.50 (0 if it was free).');
    if (!isValidDate(dateBought))
      return Alert.alert('Check the date', 'Use the format YYYY-MM-DD.');
    onSave({ name: trimmed, cost: costNum, dateBought, platforms });
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <View style={styles.header}>
          <Pressable onPress={onCancel} hitSlop={8}>
            <Text style={styles.link}>Cancel</Text>
          </Pressable>
          <Text style={styles.title}>Add item</Text>
          <Pressable onPress={submit} hitSlop={8}>
            <Text style={[styles.link, styles.bold]}>Save</Text>
          </Pressable>
        </View>

        <ScrollView contentContainerStyle={styles.form} keyboardShouldPersistTaps="handled">
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="e.g. Levi's 501 jeans"
            autoFocus
          />

          <Text style={styles.label}>Cost (what you paid)</Text>
          <TextInput
            style={styles.input}
            value={cost}
            onChangeText={setCost}
            placeholder="0.00"
            keyboardType="decimal-pad"
          />

          <Text style={styles.label}>Date bought</Text>
          <TextInput
            style={styles.input}
            value={dateBought}
            onChangeText={setDateBought}
            placeholder="YYYY-MM-DD"
            autoCapitalize="none"
            autoCorrect={false}
          />

          <Text style={styles.label}>Listed on (optional)</Text>
          <View style={styles.chips}>
            {PLATFORMS.map((p) => {
              const on = platforms.includes(p);
              return (
                <Pressable
                  key={p}
                  onPress={() => togglePlatform(p)}
                  style={[styles.chip, on && styles.chipOn]}
                >
                  <Text style={[styles.chipText, on && styles.chipTextOn]}>{p}</Text>
                </Pressable>
              );
            })}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  safe: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  title: { fontSize: 17, fontWeight: '600' },
  link: { fontSize: 17, color: '#0a6cff' },
  bold: { fontWeight: '600' },
  form: { padding: 16 },
  label: { fontSize: 13, color: '#555', marginTop: 16, marginBottom: 6 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
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
});
