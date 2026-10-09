# Stockroom

A simple web page to track your resale inventory and profit. It works on iPhone and Android,
and your items are saved on your own device. No accounts, no server. The whole app is one file: `index.html`.

## What it does

- **Add item**: name, listing price, and at least one platform (Depop / Vinted) are required. A photo is optional.
- **Stock**: three tabs. Listed (the default), Sold (waiting to ship), and Shipped.
- **Mark as sold**: enter the sale price and the platform it sold on.
- **Mark as shipped**: open a sold item and tap it once the parcel is on its way.
- **Money**: Balance (a line per platform) with a Withdraw button, Coming in (sold items not shipped yet), and total profit (switch between All time, Week, and Month).
- **Withdraw**: take out everything, or a different amount from one platform. Tap a past withdrawal to undo it.

Money only counts once an item is shipped. Sold items that haven't shipped show up under Coming in.
Fees are not counted yet.

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
