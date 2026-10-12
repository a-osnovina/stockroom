# Stockroom

A simple web page to track your resale inventory. It works on iPhone and Android,
and your items are saved on your own device. No accounts, no server.

## What it does so far

A dark, easy-to-scan look. A floating bar at the bottom has three tabs (Home, Places, Summary)
and a round **+** button to add an item from anywhere.

**Home**
- Total profit and money tied up in unsold items at the top, then profit for each app.
- A card for each step (Unlisted, List, Sold, Packed) showing the first item in it and how many more there are. Tap a card to open that step, or tap its **Add** button to add an item straight into it.
- "View all items" opens the full list.

**Step list**
- A step bar at the top: All > Unlisted > Listed > Sold > Packed. "All" shows every item with a small tag for its step, in the same order as the bar, with shipped items (white **Shipped** tag) last. The filter button beside the search box has a **Show shipped** choice in All to hide them; the app remembers it. Tap a step to see only the items in it; each step shows how many items it holds (a step with none is dimmed).
- Slim cards: photo (or an icon), name, then one line with the step tag, the app and the price (what you paid, shown only when it is more than $0; Sold and Packed items show the profit in green, or red for a loss). If the item has a place, it shows on its own third line (like "my closet #4"); items with no place show nothing there.
- The button on the right is named after what happens next (**List**, **Sold**, **Pack**, **Ship**), has a small arrow, and takes the color of the step the item moves to (**Ship** is soft white, and the Shipped pile uses the same color). Tapping **List** on an item with no app first asks which app you are listing it on, then moves it. Moving an item to Sold asks what it sold for and which app it sold on, and shows the profit (sale price minus what you paid).
- Swipe an item right to **Edit** it, or left to **Delete** it. Delete asks you to confirm first. An **Archive** button sits next to Delete: it moves an Unlisted or List item to Unlisted > Archive and shows a "View" link to open it. In the Archive section the same button reads **Unarchive** and puts the item back in Draft. Sold and shipped items can't be archived, so they only show Delete.
- The **Unlisted** step is split into **Draft** and **Archive**. It has no app filter, since nothing is listed on an app yet.
- Search for an item by its name or its place (the search boxes have a small x to clear them in one tap; typing "clos" finds "Closed sign" and everything in Closet), and filter by one or more apps, inside a step (only apps you have actually used are listed; tap each app to select it, tap again to deselect it; the list updates as you tap). The search box has a filter button beside it that opens the list of apps (a small badge shows how many are selected), so the page stays short. On Unlisted the same button chooses **Draft** or **Archive** (it turns amber on Archive), so the search box sits in the same place on every step.

**Add item** (one page; the same page edits an item)
- Three blue tiles at the top for **QR code**, **Screenshot** and **Bulk upload**. They are shown as coming soon and do not work yet.
- A photo (optional) and the item name, with its step shown underneath.
- Detail rows with the label on the left and the value on the right: **What you paid** (blank saves as $0, no warning), **Step**, **Place** and **Slot** (your phone's own picker, so long lists stay short; the lowest free slot is picked for you and taken ones are greyed out). Choose "+ New place..." in Place to type a new one.
- **Listed on** apps as buttons. Choosing the Sold step adds **Sold for** and **Sold on**.
- A summary under the details shows Paid, Sold for and Profit as you type.
- **Save and add another** keeps the place and apps and clears the name, cost and photo, which helps when you add a batch. Adding from Home or All starts an item as "Unlisted".

**Places**: a card at the top shows how many items are in a place and how many are not (that number turns gray when it is above zero). Tap the faded **+ New place** under the list to create a storage place with a name and, if you like, a number of slots, before putting anything in it. Every place with how many items are in it, and **No spot** (gray) for items with no place; tap it to see them. Tap a place to see its items. Tap **+ Add slots** inside a place (like Closet) and enter how many spaces it has. The place then shows slots 1, 2, 3... in order, with the item in each one or "Empty". When you add or edit an item in that place, pick its slot number (the lowest free one is chosen for you; taken ones are greyed out). Items show as "Closet #4", and the Sold checklist shows the place and "Slot 4". Slot counts can be changed or removed later. In **Edit slots** you can also choose how slots are named: numbers (1, 2, 3), letters (A, B, C), or a code with your own prefix (CL-001), and **Name slots one by one** lets you give any slot your own name, like "Top shelf". The name shows everywhere the slot does, including the shipping pop-up. Tap an empty slot to put an item already in that place into it, or add a new item straight into that slot. Tap a filled slot to edit its item. The slots button and a search button sit at the top right of the place, and the search finds items in that place. The place name sits on its own line under the buttons and wraps, so long names are never cut off.

**Summary**: total profit, money tied up in unsold items, and profit for each app. Tap an app (the `>` on its row) to open a receipt of the items from that app that have shipped (packed ones are not included yet), grouped by month, newest first: each item's sale price, the date it sold, what you paid and its profit, then totals. An item with no cost saved counts as $0 paid, here and in the profit totals.

Fees and shipping costs are not counted yet. The sale record already has room for them, so they can be added later once each app's fees are known.

## Put it online (GitHub Pages)

1. On GitHub, open this repo, then Settings, then Pages.
2. Under "Build and deployment", choose "Deploy from a branch", pick `main` and `/ (root)`, then Save.
3. After a minute or two the page is at https://a-osnovina.github.io/stockroom/

To use it like an app, open that link on your phone, then use "Add to Home Screen"
(iPhone: Share button in Safari. Android: the browser menu). It has its own icon, opens full screen without the browser bars, and is made for phones held upright. After the first time it is opened online, it also opens with no connection. It always checks for a newer version first, so updates show up as soon as you are online.

## Good to know

Items are stored in your browser on that phone. Clearing browser data or website
history for the site will erase them, and a different phone starts empty.
A backup option is planned.

Photos are shrunk before they are saved so many of them fit, but a lot of photos can still
fill the space the browser gives the page. If saving ever fails, that is the likely reason.

The page loads its font from Google Fonts in the background, so the page appears right away and the font swaps in a moment later. Without a connection it uses the phone's normal font and everything else still works.


**Big numbers**: money shows with commas (e.g. $1,234,567.89). Summary always shows exact amounts; Home abbreviates very large ones ($12.3k, $4.5M, $1.2B) so nothing runs off the screen.

A soft fade sits under the bottom bar so items don't show sharply behind it.

**Bundles and shipping**
- In the sale sheet, **+ Sold with another item** lets you add other items that are in List on the same app. You enter one total price for the whole parcel (shared out evenly behind the scenes) and the profit is the total minus what all the items cost.
- **Sold** has one card per sale, with the profit next to the app. A bundle has one tile in its header showing how many items are in it, then the app; each item in it shows its own photo, its place and a tick box. Tick each one as you gather it: its slot is free again straight away. When everything is ticked a **Pack** button appears at the top right of the card. An item with no place has nothing to tick and shows **Pack** right away.
- **Packed** (the last step) holds the packed parcels: the item names, a **Ship** button at the top right and the profit next to the app. Ship moves the parcel to **Shipped** and shows an Undo. **Ship all** at the top ships every parcel at once.
- **Shipped** parcels leave the steps but still count in your profit. They appear at the end of All unless you hide them, and in each app's receipt in Summary. **Back to List** on a card puts its items back in List and removes the sale. If an item's old slot was taken meanwhile, it comes back without a slot.
- Swipe a parcel (in Sold, Packed or Shipped) right to **Edit the sale**: change the total price or the app, for example if a bundle price was typed wrong. The price is shared out again and the profit updates. Parcels no longer open item details; only a lone item still waiting in Sold does. Swipe left to delete the whole parcel.
