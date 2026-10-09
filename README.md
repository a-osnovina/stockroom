# Stockroom

A small phone app (iPhone and Android) to track resale inventory and profit.
Everything is stored on the device. No accounts, no server.

## Status

v1 in progress. Built so far:

- Add an item: name, cost, date bought, platforms it is listed on
- Inventory list with search and platform filter

Next, one at a time and only after review: mark as sold (profit), summary screen.

## Run it

This repo holds the app source (`App.tsx` and `src/`). Expo generates the rest.

1. Create the Expo shell: `npx create-expo-app@latest stockroom-app --template blank-typescript`
2. Copy this repo's `App.tsx` over the shell's `App.tsx`, and copy the `src/` folder in next to it.
3. Inside the shell folder, install the two libraries the app uses (this picks versions that match your Expo version):
   `npx expo install @react-native-async-storage/async-storage react-native-safe-area-context`
4. `npx expo start`, then scan the QR code with the Expo Go app (iPhone: use the Camera app; Android: scan inside Expo Go).

## Not included on purpose

Settings, themes, accounts, charts, photos, barcode scanning, notifications, automatic syncing with resale sites.
Backup/export comes later.
