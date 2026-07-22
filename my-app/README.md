Markdown
# 🪙 Crypto Dashboard (Next.js)

A high-performance cryptocurrency tracking dashboard built with Next.js. This project demonstrates production-ready architecture, secure data fetching, and advanced state management techniques.

## 🏗️ Architectural Decisions

This project was built with a strict focus on performance, security, and rendering best practices:

### 1. Separation of Client and Server State
Instead of combining all data into a single state manager like Redux, this app cleanly separates concerns:
* **Server State (TanStack Query):** Live cryptocurrency data is fetched, cached in RAM, and managed via TanStack Query using a **Stale-While-Revalidate** strategy. This eliminates loading spinners on navigation and drastically reduces redundant API calls.
* **Client State (React Context):** User authentication status is managed globally via React Context, avoiding prop-drilling and keeping the UI state lightweight.

### 2. Secure API Proxies (Bypassing CORS)
Fetching third-party data directly from a React Client Component exposes API keys and often triggers strict browser CORS errors. 
* **The Solution:** Implemented Next.js Server API Routes (`/api/market`) to act as a secure proxy. The browser requests data from the local Next.js server, which securely contacts the external API (CoinGecko). This bypasses CORS entirely and keeps API keys hidden from the browser's Network tab.

### 3. Safe Hydration & Persistent Storage
Reading from `localStorage` on initial load in Next.js causes Hydration Mismatch errors because the Server does not have access to the browser's memory.
* **The Solution:** Implemented a controlled mounting pattern using `useEffect`. The app renders a safe, server-matching default layout on the first frame, and then seamlessly hydrates the UI with `localStorage` data (like active user sessions) once mounted in the browser.

### 4. Search Performance 
Filtering large datasets on every single keystroke can block the JavaScript main thread and cause the UI to stutter.
* **The Solution:** Utilized rendering optimization techniques (like debouncing or React's `useDeferredValue`) to decouple the instant visual feedback of typing from the heavier task of filtering the array in memory.

---

## 🛠️ Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** TypeScript
* **State Management:** TanStack Query (React Query) & React Context
* **Styling:** Tailwind CSS
* **Data Source:** CoinGecko API

---

## 🚀 Quick Start

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/Abdullah-Naifeh/Frontend-Technical-Assessment.git]
   cd my-app
Install dependencies:

Bash
npm install
Set up environment variables:
Create a .env.local file in the root directory and add your API keys (if applicable):

Code snippet
NEXT_PUBLIC_API_URL=your_api_url_here
Run the development server:

Bash
npm run dev
Open http://localhost:3000 in your browser to see the result.

## 🧪 Testing the App

To bypass the registration process and jump straight into the dashboard, you can use this test account:

* **Email:** `demo@user.com`
* **Password:** `password`

*(Note: This is a dummy account provisioned with read-only access to showcase the dashboard features).*