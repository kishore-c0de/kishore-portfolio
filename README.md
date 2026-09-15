# Kishore M — Portfolio (React + Vite)

## Structure
- `client/` — React (Vite) frontend

## Setup

### Client
```
cd client
npm install
npm run dev
```
Runs on http://localhost:5173

### Build
```
cd client
npm run build
```
Outputs to `client/dist/`

### Environment variables
The contact form uses [Web3Forms](https://web3forms.com). Create `client/.env.local` with:
```
VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

## Notes
- The contact form (`client/src/components/Contact.jsx`) submits directly to the Web3Forms API — no backend server required.
- The Hero section's layout (circle background, image placement, text position) is preserved exactly as in the original design — only extracted into `client/src/components/Hero.jsx`.
- Accent color was extended into a purple → cyan gradient (`--gradient-cool` in `client/src/index.css`) for a cooler vibe across About/Journey/Skills/Projects, while the Hero itself keeps its original solid purple.
