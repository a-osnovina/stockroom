# Stockroom

A simple web page to track your resale inventory. It works on iPhone and Android,
and your items are saved on your own device. No accounts, no server.

## What it does so far

Three tabs along the bottom: Inventory, Places and Summary.

**Inventory**
- A step bar at the top: Import > List > Sold > Packed > Shipped. Tap a step to see the items in it; each step shows how many items it holds.
- "+ Add" puts a new item in the step you are looking at (name, what you paid, date bought, optional location, which apps it is listed on)
- Each item has a button to move it to the next step. Moving an item to Sold asks what it sold for and which app it sold on, and shows the profit (sale price minus what you paid).
- Sold, Packed and Shipped items show the sale price and profit.
- Locations: an optional place for each item, like Closet or Tub 3. In the Sold step each item shows "Grab from: ...". Tap Change (or Set location) to edit it.
- Search and filter by app inside a step

**Places**: every place with how many items are in it. Tap a place to see its items. Items that have shipped are not counted.

**Summary**: total profit, money tied up in unsold items (what you paid for items still in Import or List), and profit for each app.

Fees and shipping costs are not counted yet. The sale record already has room for them, so they can be added later once each app's fees are known.

## Put it online (GitHub Pages)

1. On GitHub, open this repo, then Settings, then Pages.
2. Under "Build and deployment", choose "Deploy from a branch", pick `main` and `/ (root)`, then Save.
3. After a minute or two the page is at https://a-osnovina.github.io/stockroom/

To use it like an app, open that link on your phone, then use "Add to Home Screen"
(iPhone: Share button in Safari. Android: the browser menu).

## Good to know

Items are stored in your browser on that phone. Clearing browser data or website
history for the site will erase them, and a different phone starts empty.
A backup option is planned.
