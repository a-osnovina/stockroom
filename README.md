# Stockroom

A simple web page to track your resale inventory. It works on iPhone and Android,
and your items are saved on your own device. No accounts, no server.

## What it does so far

- A step bar at the top: Import > List > Sold > Packed > Shipped. Tap a step to see the items in it; each step shows how many items it holds.
- "+ Add" puts a new item in the step you are looking at (name, what you paid, date bought, which apps it is listed on)
- Each item has a button to move it to the next step
- Search and filter by app inside a step

Coming next: sale price, fees and shipping when an item is sold, with profit calculated for you, then a summary screen.

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
