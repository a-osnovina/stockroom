# Stockroom

A simple web page to track your resale inventory. It works on iPhone and Android,
and your items are saved on your own device. No accounts, no server.

## What it does so far

A dark, easy-to-scan look. A floating bar at the bottom has four tabs (Home, Items, Places, Summary)
and a round **+** button to add an item from anywhere.

**Home** is built around jobs to do, search first.
- The line at the top shows profit and money tied up; tap it to open Summary.
- **What sold?** with a big search box. Tapping it opens **Mark as sold** with the keyboard already up: your Listed items, newest first, a filter by app, and a teal **Sold** button on each row.
- **Newest listed** shows the last three listed items, each with its own **Sold** button, and **See all N** opens the Listed step.
- A quiet row for Unlisted items that still need an app opens Unlisted.
- **Waiting on you**: a purple banner "N parcels to ship" with **Ship all**, and a teal banner "N items to pack" with **Open**. Tap a banner to open that step. When there is nothing to pack or ship it becomes an "All caught up" card.
- With no items yet, Home shows only **Add an item**.

**Items** tab is the old Home without the profit numbers: a card for each step (Unlisted, Listed, Sold, Packed, Shipped) with its first item and how many more, and **View all items**. Tap a card to open that step; the back arrow returns here.

**Step list**
- A step bar at the top: All > Unlisted > Listed > Sold > Packed > Shipped. "All" shows every item with a small tag for its step, in the same order as the bar, with shipped items (white **Shipped** tag) last. Tap a step to see only the items in it; **Shipped** (the last chip, rose) holds the parcels you have sent; each step shows how many items it holds (a step with none is dimmed).
- Slim cards: photo (or an icon), name, then one line with the step tag, the app and the price (what you paid, shown only when it is more than $0; Sold and Packed items show the profit in green, or red for a loss). If the item has a place, it shows on its own third line (like "my closet #4"); items with no place show nothing there.
- The button on the right is named after what happens next (**List**, **Sold**, **Pack**, **Ship**), has a small arrow, and takes the color of the step the item moves to (**Ship** is rose, and the Shipped pile uses the same color). Tapping **List** on an item with no app first asks which app you are listing it on, then moves it. Moving an item to Sold asks what it sold for and which app it sold on, and shows the profit (sale price minus what you paid).
- Swipe an item right to **Edit** it, or left to **Delete** it. Delete asks you to confirm first. An **Archive** button sits next to Delete: it moves an Unlisted or List item to Unlisted > Archive and shows a "View" link to open it. In the Archive section the same button reads **Unarchive** and puts the item back in Draft. Sold and shipped items can't be archived, so they only show Delete.
- The **Unlisted** step is split into **Draft** and **Archive**. It has no app filter, since nothing is listed on an app yet.
- Search for an item by its name or its place (the search boxes have a small x to clear them in one tap; typing "clos" finds "Closed sign" and everything in Closet), and filter by one or more apps, inside a step (only apps you have actually used are listed; tap each app to select it, tap again to deselect it; the list updates as you tap). The search box has a filter button beside it that opens the list of apps (a small badge shows how many are selected), so the page stays short. On Unlisted the same button chooses **Draft** or **Archive** (it turns amber on Archive), so the search box sits in the same place on every step.

**Add item** (one page; the same page edits an item)
- Three blue tiles at the top for **QR code**, **Screenshot** and **Bulk upload**. They are shown as coming soon and do not work yet.
- A photo (optional) and the item name, with its step shown underneath.
- Detail rows with the label on the left and the value on the right: **What you paid** (blank saves as $0, no warning), **Step**, **Place** and **Slot** (your phone's own picker, so long lists stay short; the lowest free slot is picked for you and taken ones are greyed out). Choose "+ New place..." in Place to type a new one.
- **Listed on** apps as buttons. Choosing the Sold step adds **Sold for** and **Sold on**.
- The keyboard never opens by itself; tap a box to type. The Return key moves from the name to What you paid (and closes the keyboard in the other boxes) instead of saving; only the Save buttons save. If something is missing, the message appears and that box is outlined in red and brought into view.
- Once the Step is Sold or Packed, a summary under the details shows Paid, Sold for and Profit as you type.
- **Save** returns to where you were and shows "Saved <name> in <step>" with a **View** link that opens that step.
- **Save and add another** keeps the place and apps, clears the name, cost and photo, and scrolls back to the top, which helps when you add a batch. Adding from Home or All starts an item as "Unlisted".

**Places**: a card at the top shows how many items are in a place and how many are not (that number turns gray when it is above zero). Tap the faded **+ New place** under the list to create a storage place with a name and, if you like, a number of slots, before putting anything in it. Every place with how many items are in it, and **No place** (gray) for items with no place; tap it to see them. Tap a place to see its items. Tap **+ Add slots** inside a place (like Closet) and enter how many spaces it has. The place then shows slots 1, 2, 3... in order, with the item in each one or "Empty". When you add or edit an item in that place, pick its slot number (the lowest free one is chosen for you; taken ones are greyed out). Items show as "Closet #4", and the Sold checklist shows the place and "Slot 4". Slot counts can be changed or removed later. In **Edit slots** you can also choose how slots are named: numbers (1, 2, 3), letters (A, B, C), or a code with your own prefix (CL-001), and **Name slots one by one** lets you give any slot your own name, like "Top shelf". The name shows everywhere the slot does, including the shipping pop-up. Tap an empty slot to put an item already in that place into it, or add a new item straight into that slot. Tap a filled slot to edit its item. The slots button and a search button sit at the top right of the place, and the search finds items in that place. The place name sits on its own line under the buttons and wraps, so long names are never cut off.

**Summary**: total profit, money tied up in unsold items, and profit for each app. Tap **All apps** at the top for one receipt of every shipped item, or tap an app (the `>` on its row) for just that app. A receipt lists only shipped items (sold and packed ones are not on it yet; a line under it says how much profit is still waiting), grouped by month, newest first: each item's sale price, the date it sold, what you paid and its profit, then totals. An item with no cost saved counts as $0 paid, here and in the profit totals.

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
Use **Settings > Backup** (see below) to save a copy.

Photos are shrunk before they are saved so many of them fit, but a lot of photos can still
fill the space the browser gives the page. If saving ever fails, that is the likely reason.

The page loads its font from Google Fonts in the background, so the page appears right away and the font swaps in a moment later. Without a connection it uses the phone's normal font and everything else still works.


**Settings and backup**: the gear button at the top right of Home opens Settings, which for now holds only Backup.
- **Back up now** makes one file (`stockroom-backup-YYYY-MM-DD.json`) with your items, photos, places, slots and slot names. On a phone it opens the share sheet so you can save it to Files or Google Drive, or send it to yourself; if the phone has no share sheet it downloads the file instead. If you close the share sheet without saving, it does not count as a backup.
- **Restore from a backup** lets you pick a backup file. It shows how many items the backup has and how many are on the phone now, and replaces everything only after you tap Restore. If the phone cannot store the backup, nothing is changed. Use it to move to a new phone.
- Settings shows how long ago the last backup was. When you have items and the last backup is 7 or more days old (or there is none), Home shows a "Time to back up" card with a **Back up** button and the gear button gets a blue dot. Both go away once you back up.
- A backup file is a plain text file. It contains your photos, so keep it private.

**Big numbers**: money shows with commas (e.g. $1,234,567.89). Summary always shows exact amounts; Home abbreviates very large ones ($12.3k, $4.5M, $1.2B) so nothing runs off the screen.

A soft fade sits under the bottom bar so items don't show sharply behind it.

**Bundles and shipping**
- In the sale sheet, **+ Sold with another item** lets you add other items that are Listed on the same app. You enter one total price for the whole parcel (shared out evenly behind the scenes) and the profit is the total minus what all the items cost.
- **Sold** has one card per sale, with the profit next to the app. A bundle shows a small photo stack with a count badge, the app, the profit and the places to visit. Under it, a row of green segments (one per item with a place) fills up as you gather, with "N of M gathered" and a **Show items / Hide items** link that opens the checklist (photo, name, place, tick box). Ticking frees the slot straight away. **Pack** is always there but greyed out until everything is ticked; an item with no place has nothing to tick. A lone item with a place works the same way.
- **Packed** (the last step) holds the packed parcels: a bundle is collapsed to its photo stack with a one-line preview of the item names and a chevron to open the full list. **Ship** sits at the top right, with the profit next to the app. Ship moves the parcel to **Shipped** and shows an Undo. **Ship all** at the top ships every parcel at once.
- **Shipped** parcels leave the steps but still count in your profit. They appear in the **Shipped** step, at the end of All, and in the receipts in Summary.
- Swipe a parcel (in Sold, Packed or Shipped) right to **Edit the sale**: change the total price or the app, for example if a bundle price was typed wrong. The price is shared out again and the profit updates. Parcels no longer open item details; only a lone item still waiting in Sold does. Swipe left to delete the whole parcel.
