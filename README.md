# Stockroom

A simple web page to track your resale inventory and profit. It works on iPhone and Android,
and your items are saved on your own device. No accounts, no server. The whole app is one file: `index.html`.

## What it does (version 1)

- **Add item**: only the name is required. Photo, platforms (Depop / Vinted), listing price and what you paid are optional.
- **Stock**: all your items with a status. Tap a status tab to filter, tap it again to clear.
  - In progress = just a name so far
  - Listed = has a price and a platform
  - Sold = marked as sold
- **Mark as sold**: enter the sale price and platform, and the profit shows right away.
- **Money**: total profit and a progress bar toward the printer goal ($89).

Fees are not counted yet. Profit = sale price minus what you paid (items from storage cost $0).

## Put it online (GitHub Pages)

1. On GitHub, open this repo, then Settings, then Pages.
2. Under "Build and deployment", choose "Deploy from a branch", pick `main` and `/ (root)`, then Save.
3. After a minute or two the page is at https://a-osnovina.github.io/stockroom/

To use it like an app, open that link on your phone, then use "Add to Home Screen"
(iPhone: Share button in Safari).

## Good to know

Items are stored in your browser on that phone. Clearing browser data or website
history for the site will erase them, and a different phone starts empty.
A backup option is planned.

## Later, one at a time

Fees per platform, withdraw, bin/slot storage spots, planning, alerts, bundles.
