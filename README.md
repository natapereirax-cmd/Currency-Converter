# Currency Converter

Web app to convert amounts between currencies.

## Stack

- React 19
- Vite
- React Router
- styled-components
- Nginx (serves the production build in Docker)

## Run locally

Requires Node.js.

    npm install
    npm run dev

Other scripts:

    npm run build     # production build
    npm run preview   # preview the build
    npm run lint      # run Oxlint

## Run with Docker

    docker compose up --build

Open http://localhost:8080 in your browser.

To stop:

    docker compose down

The image is also published as `natep20/currency-converter`.

## Exchange rates

[Name the API or source used for rates, and whether an API key is needed.]
