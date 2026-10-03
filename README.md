# AI Invoice Generator

A full-stack invoicing web application that allows users to create, manage, and preview professional invoices, with an integrated AI assistant that auto-generates invoice data from a simple text prompt.

## Overview

Manually filling out invoice forms — client details, line items, taxes, due dates — is repetitive and time-consuming. This app lets a user simply paste or type a description like *"A person wants a logo design for her organic brand GreenVibe. Quoted for $120 for 2 logo options and final delivery in PNG and vector format"*, and the AI parses that into a fully structured invoice, which the user can then review, edit, and save.

## Features

- **AI-assisted invoice generation** — Google Gemini converts natural-language prompts into structured invoice JSON (client info, line items, tax %, dates, etc.), which pre-fills the invoice form
- **Manual invoice CRUD** — create, view, update, and delete invoices, with server-side persistence and a local-storage fallback if the API call fails, so no work is lost
- **Invoice listing with search, sort & pagination** — filter invoices by client/status, sort by date/amount, and page through results
- **Invoice preview & PDF export** — dedicated print-friendly view with a "Print / Save as PDF" action
- **Draft support** — invoices can be saved as drafts and edited later before finalizing
- **Business profiles** — save business name, contact info, GST number, logo, stamp, and signature to reuse across invoices
- **Image asset uploads** — logo/stamp/signature image handling via Multer, served statically and normalized on the frontend (auto-resolves relative/localhost URLs to the correct API base)
- **Authentication** — secure sign-up/login and protected routes via Clerk
- **Dashboard** — KPI cards (revenue, pending, AI-generated count, etc.) and status badges (draft / unpaid / paid / overdue)
- **Multi-currency support** — invoice amounts formatted per currency (e.g. INR/USD) using `Intl.NumberFormat`
- **Marketing landing page** — public Home page with Hero, Features, and Pricing sections before sign-in

## Tech Stack

**Frontend:** React 19, Vite, Tailwind CSS, React Router, Clerk (client-side auth)

**Backend:** Node.js, Express 5, MongoDB + Mongoose, Clerk (auth middleware), Google Gemini API, Multer

## Architecture

- REST API built with Express, with Clerk middleware protecting invoice and business-profile routes
- A dedicated `/api/ai/generate` endpoint builds a strict JSON-schema prompt, sends it to Gemini (with model fallback if one variant fails), parses the AI's response, and returns clean invoice data to the frontend
- MongoDB stores invoices and business profiles, each scoped to the authenticated user
- Frontend gracefully falls back to `localStorage` if the backend is unreachable, keeping the app usable offline/degraded
- Clean separation of concerns: controllers, models, and routes on the backend; component and page structure on the frontend

## Key Highlights (for interview discussion)

- Designed a strict JSON-schema prompt so LLM output is reliably parseable, with fallback handling if the model returns malformed data
- Implemented multi-model fallback (tries `gemini-2.5-flash`, then alternate models) for resilience against API failures
- Built an auth-protected REST API with per-route Clerk middleware
- Handled file uploads (Multer) tied to user-specific business profiles, with URL normalization so images work correctly across local and deployed environments
- Implemented resilient UX: local-storage fallback for invoice creation/editing if the server call fails
- Built client-side search, sorting, and pagination logic for the invoice list

## Author

Built by Tanuja
