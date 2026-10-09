# Stockroom

A simple web page to track your resale inventory and profit. It works on iPhone and Android,
and your items are saved on your own device. No accounts, no server. The whole app is one file: `index.html`.

## What it does

- **Add item**: name, listing price, and at least one platform (Depop / Vinted) are required. A photo is optional.
- **Stock**: shows what is listed by default. Tap Sold to see sold items, tap Listed to come back.
- **Mark as sold**: enter the sale price and the platform it sold on, and the profit shows right away.
- **Money**: your balance (with a line per platform), a Withdraw button, and total profit.
- **Withdraw**: take out everything, or a different amount from one platform. Tap a past withdrawal to undo it.

Fees are not counted yet. Profit = what each item sold for. Balance = profit minus withdrawals.

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

Fees per platform, bin/slot storage spots, planning, alerts, bundles.
