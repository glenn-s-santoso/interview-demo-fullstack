# Server — Node.js + Express

## Architecture Layers
```
routes/       → HTTP path definitions only, no logic
controllers/  → Request/response handling, input validation
services/     → Business logic
middleware/   → Auth, error handling, rate limiting
```

## Environment Variables
See root `.env.example`.

## Running Locally
```bash
cp ../.env.example ../.env   # fill in values
npm install
npm run dev
```

## Postman
Import `postman_collection.json` — has environments for local + staging.
