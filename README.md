# LiveHub Mobile H5 Frontend Template

LiveHub is a Vue 3 + Vite mobile H5 frontend template for social live room products. It is designed as a commercial UI starter for marketplaces such as CodeCanyon, with mock data, mobile-first layouts, and reusable Vue components.

This project is a frontend template only. It does not include a backend, live streaming server, payment gateway, database, admin panel, or real authentication service.

Keywords: bigo live clone script, tiktok-bigo-live-clone-script, tiktok bigo live clone script.

We provide a full set of source code. If you want to purchase the complete version, contact WhatsApp: +44 7999 529473.

## Features

- Vue 3 + Vite single page application
- Vue Router page routing
- Pinia state store with localStorage demo persistence
- Mobile-first responsive layout for 375px, 390px, 414px, and 430px widths
- Mock live stream data, gift data, ranking data, wallet records, and user state
- Reusable components for live cards, top tabs, gift panel, chat list, bottom navigation, avatars, and ranking lists
- Abstract CSS-generated visual placeholders with no third-party app screenshots

## Pages Included

- Home / recommended live list
- Live room
- Gift panel
- Wallet / recharge UI
- Ranking
- Host profile
- Login
- Register
- User center
- Settings
- 404 page

## How to Install

```bash
npm install
```

Recommended runtime:

- Node.js 20 or newer
- npm 10 or newer

## How to Run

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal.

## Build for Production

```bash
npm run build
```

The production files will be generated in the `dist/` directory.

## Project Structure

```text
src/
  components/    Reusable Vue UI components
  mock/          Local mock JSON-style data
  pages/         Route-level pages
  router/        Vue Router configuration
  store/         Pinia state store
  styles/        Global mobile H5 styles
  utils/         Small formatting helpers
```

## How to Customize Colors

Open `src/styles/main.css` and edit the CSS variables at the top:

```css
:root {
  --ink: #17201d;
  --paper: #fffaf1;
  --accent: #ff5d4d;
  --accent-2: #18b7a4;
  --dark: #111614;
}
```

You can also update the abstract cover and avatar gradients in the same file, such as `.cover-sunset`, `.cover-ocean`, `.avatar-coral`, and `.avatar-blue`.

## How to Edit Mock Data

Mock data is stored in `src/mock/liveData.js`.

You can edit:

- Category tabs
- Live stream cards
- Host profiles
- Chat messages
- Gift list and gift prices
- Recharge packages
- Ranking lists

No remote API is required.

## Important Notice

This is a frontend template only:

- No backend
- No real live streaming
- No real payment gateway
- No database
- No admin panel
- No production authentication

Login, registration, wallet balance, following state, and gift sending are simulated locally with Pinia and localStorage. They are included only to demonstrate UI flows.

## Customization Services

Paid customization services can be offered separately, including:

- Backend API integration
- Live streaming SDK integration
- Payment gateway integration
- Admin dashboard development
- Brand styling and page extension
- Multi-language support

For the complete version and full source code package, contact WhatsApp: +44 7999 529473.
