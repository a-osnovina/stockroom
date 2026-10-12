# Stockroom

A simple web page to track your resale inventory. It works on iPhone and Android,
and your items are saved on your own device. No accounts, no server.

## What it does so far

A dark, easy-to-scan look. A floating bar at the bottom has three tabs (Home, Places, Summary)
and a round **+** button to add an item from anywhere.

**Home**
- Total profit and money tied up in unsold items at the top, then profit for each app.
- A card for each step (Not listed, List, Sold, Shipped) showing the first item in it and how many more there are. Tap a card to open that step, or tap its **Add** button to add an item straight into it.
- "View all items" opens the full list.

**Step list**
- A step bar at the top: All > Not listed > List > Sold > Shipped. "All" shows every item with a small tag for its step. Tap a step to see only the items in it; each step shows how many items it holds.
- Slim cards: photo (or an icon), name, apps and place, and the price. Sold and Shipped items show the profit instead.
- The arrow button moves an item to the next step. Moving an item to Sold asks what it sold for and which app it sold on, and shows the profit (sale price minus what you paid). Moving an item to Shipped asks "Did you grab it?" and names its place, but only if the item has a place.
- Swipe an item right to **Edit** it, or left to **Delete** it. Delete asks you to confirm first. An **Archive** button sits next to Delete: it moves a Not listed or List item to Not listed > Archive and shows a "View" link to open it. In the Archive section the same button reads **Unarchive** and puts the item back in Draft. Sold and shipped items can't be archived, so they only show Delete.
- The **Not listed** step is split into **Draft** and **Archive**. It has no app filter, since nothing is listed on an app yet.
- Search for an item by its name or its place (the search boxes have a small x to clear them in one tap; typing "clos" finds "Closed sign" and everything in Closet), and filter by app, inside a step. Apps is one row near the top that opens to show every app, so the page stays short; the search box sits right under it. On Not listed, the Draft/Archive buttons sit in that same spot, so the search box stays put when you switch steps.

**Add item** (one page; the same page edits an item)
- Three blue tiles at the top for **Barcode scan**, **Screenshot** and **Bulk upload**. They are shown as coming soon and do not work yet.
- A photo (optional) and the item name, with its step shown underneath.
- Detail rows with the label on the left and the value on the right: **What you paid** (blank saves as $0, no warning), **Step**, **Place** and **Slot** (your phone's own picker, so long lists stay short; the lowest free slot is picked for you and taken ones are greyed out). Choose "+ New place..." in Place to type a new one.
- **Listed on** apps as buttons. Choosing the Sold step adds **Sold for** and **Sold on**.
- A summary under the details shows Paid, Sold for and Profit as you type.
- **Save and add another** keeps the place and apps and clears the name, cost and photo, which helps when you add a batch. Adding from Home or All starts an item as "Not listed".

**Places**: tap **+ New place** (top right) to create a storage place with a name and, if you like, a number of slots, before putting anything in it. Every place with how many items are in it. Tap a place to see its items. Tap **+ Add slots** inside a place (like Closet) and enter how many spaces it has. The place then shows slots 1, 2, 3... in order, with the item in each one or "Empty". When you add or edit an item in that place, pick its slot number (the lowest free one is chosen for you; taken ones are greyed out). Items show as "Closet #4", and the "Did you grab it?" window shows the place and "Slot 4". Slot counts can be changed or removed later. In **Edit slots** you can also choose how slots are named: numbers (1, 2, 3), letters (A, B, C), or a code with your own prefix (CL-001), and **Name slots one by one** lets you give any slot your own name, like "Top shelf". The name shows everywhere the slot does, including the shipping pop-up. Tap an empty slot to put an item already in that place into it, or add a new item straight into that slot. Tap a filled slot to edit its item. The slots button and a search button sit at the top right of the place, and the search finds items in that place. Items that have shipped are not counted. The place name sits on its own line under the buttons and wraps, so long names are never cut off.

**Summary**: total profit, money tied up in unsold items, and profit for each app.

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
