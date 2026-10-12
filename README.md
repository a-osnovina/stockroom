# Stockroom

A simple web page to track your resale inventory. It works on iPhone and Android,
and your items are saved on your own device. No accounts, no server.

## What it does so far

A dark, easy-to-scan look. A floating bar at the bottom has three tabs (Home, Places, Summary)
and a round **+** button to add an item from anywhere.

**Home**
- Total profit and money tied up in unsold items at the top, then profit for each app.
- A card for each step (List, Sold, Packed, Shipped) showing the first item in it and how many more there are. Tap a card to open that step, or tap its **Add** button to add an item straight into it.
- "View all items" opens the full list.

**Step list**
- A step bar at the top: All > List > Sold > Packed > Shipped. "All" shows every item with a small tag for its step. Tap a step to see only the items in it; each step shows how many items it holds.
- Slim cards: photo (or an icon), name, apps and place, and the price. Sold, Packed and Shipped items show the profit instead.
- The arrow button moves an item to the next step. Moving an item to Sold asks what it sold for and which app it sold on, and shows the profit (sale price minus what you paid).
- Swipe an item right to **Edit** it, or left to **Delete** it. Delete asks you to confirm first.
- Search and filter by app inside a step.

**Add item**
- Add a photo (optional), then the item name and what you paid.
- Pick a place from the places you already use, or add a new one.
- Pick the apps the item is listed on.
- The "Add to" step at the top decides where the item starts. Adding from Home or All starts it as "Not listed".
- **Save and add another** keeps the place and apps and clears the name, cost and photo, which helps when you add a batch.
- "Fill from a screenshot" is shown as coming soon. It does not work yet.
- Editing an item uses the same form, filled in. You can also change its step there. If you move an item to Sold, Packed or Shipped, it asks for the sale price and the app it sold on.

**Places**: every place with how many items are in it. Tap a place to see its items. Items that have shipped are not counted.

**Summary**: total profit, money tied up in unsold items, and profit for each app.

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

Photos are shrunk before they are saved so many of them fit, but a lot of photos can still
fill the space the browser gives the page. If saving ever fails, that is the likely reason.

The page loads its font from Google Fonts. Without a connection it falls back to the phone's
normal font and everything else still works.
