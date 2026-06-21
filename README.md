# Auth Form App

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-149eca?logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)

A clean, modern authentication UI built with **Next.js 16**, **React 19**, and **TypeScript**. It demonstrates a complete login and registration flow with client-side validation, dark/light theming, and toast notifications — using shadcn/ui components on top of Base UI primitives.

> **Note:** This project focuses on the front-end experience. Form submissions are simulated locally (state held in Jotai atoms) and are not persisted to a server. It is intended as a starter template for building real auth flows.

## ✨ Features

- 🔐 **Login & Register flows** with end-to-end client-side validation via [Zod](https://zod.dev)
- 🧩 **Reusable form components** powered by [react-hook-form](https://react-hook-form.com) and Base UI's `Field` primitive
- 🌓 **Dark / light theme toggle** with `next-themes` (dark mode is the default)
- 🔔 **Toast notifications** via `react-toastify`, theme-aware
- 🎨 **shadcn/ui** components styled with **Tailwind CSS v4** and **Base UI**
- ⚛️ **Global state** with [Jotai](https://jotai.org) atoms for a typed, minimal store
- 🛣️ **Typed routes** and the **React Compiler** enabled for faster, safer React
- 📱 **Responsive layout** that looks great on phones and desktops
- 🔍 **Strict TypeScript** with `strict` mode and `@/*` path aliasing

## 📂 Project Structure

```
auth-form-app/
├── public/                       # Static assets (favicon, etc.)
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx            # Root layout (Header, ThemeProvider, fonts)
│   │   ├── page.tsx              # Login page (`/`)
│   │   ├── globals.css           # Tailwind v4 entry stylesheet
│   │   └── register/
│   │       └── page.tsx          # Register page (`/register`)
│   ├── components/
│   │   ├── Header/               # Top navigation bar
│   │   ├── Providers/            # Theme + Toast providers
│   │   ├── customui/             # Login & Register form components
│   │   ├── shadcnui/             # Generated shadcn/ui primitives
│   │   ├── ThemeToggleButton.tsx
│   │   └── ToastProvider.tsx
│   ├── hooks/                    # Custom React hooks (reserved)
│   └── lib/
│       ├── atom.ts               # Jotai atoms (registerAtom)
│       ├── fonts.ts              # Geist & Geist Mono font loaders
│       ├── utils.ts              # `cn()` class-name helper
│       └── zodSchema.ts          # Zod schemas + inferred TS types
├── components.json               # shadcn/ui configuration
├── eslint.config.mjs             # Flat ESLint config (Next.js presets)
├── next.config.ts                # Next.js config (typed routes + compiler)
├── tailwind / postcss configs    # Tailwind v4 (PostCSS plugin)
├── tsconfig.json                 # Strict TS config with `@/*` alias
├── package.json
└── LICENSE
```

## 🧰 Tech Stack

| Layer       | Tools                                                                                           |
| ----------- | ----------------------------------------------------------------------------------------------- |
| Framework   | [Next.js 16](https://nextjs.org) (App Router)                                                   |
| Language    | [TypeScript](https://www.typescriptlang.org) (strict mode)                                      |
| UI runtime  | [React 19](https://react.dev)                                                                   |
| Styling     | [Tailwind CSS v4](https://tailwindcss.com), `clsx`, `tailwind-merge`                            |
| Components  | [shadcn/ui](https://ui.shadcn.com) on [Base UI](https://base-ui.com) primitives                 |
| Forms       | [react-hook-form](https://react-hook-form.com) + [Zod](https://zod.dev) (`@hookform/resolvers`) |
| State       | [Jotai](https://jotai.org)                                                                      |
| Icons       | [lucide-react](https://lucide.dev)                                                              |
| Toasts      | [react-toastify](https://fkhadra.github.io/react-toastify)                                      |
| Theming     | [next-themes](https://github.com/pacocoursey/next-themes)                                       |
| Lint/Format | [ESLint](https://eslint.org) (flat config), [Prettier](https://prettier.io)                     |

## 🚀 Getting Started

### Prerequisites

- **Node.js** `>=24.x` (see `engines` in [`package.json`](./package.json))
- **npm** `>=11.x` — or any compatible package manager (`pnpm`, `yarn`, `bun`)

### 1. Clone the repository

```bash
git clone https://github.com/piyushsarkar-dev/auth-form-app.git
cd auth-form-app
```

### 2. Install dependencies

Using **npm**:

```bash
npm install
```

Or using **bun** (matches the existing `bun.lock`):

```bash
bun install
```

### 3. Run the development server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser. The login page is the default route, and registration lives at [`/register`](http://localhost:3000/register).

### 4. Build & start for production

```bash
npm run prod
```

This script runs `eslint && next build && next start`, so it lints, builds an optimized bundle, and starts the production server.

## 📜 Available Scripts

| Script          | Description                                           |
| --------------- | ----------------------------------------------------- |
| `npm run dev`   | Start the Next.js development server with hot reload. |
| `npm run build` | Produce an optimized production build.                |
| `npm run start` | Serve the production build (run `build` first).       |
| `npm run lint`  | Lint the project with the flat ESLint configuration.  |

## 🧪 Usage

### Try the flow

1. Visit **`/register`** and submit the form with a valid name (≥6 chars), email, and password (≥8 chars). The form simulates a 1.5 s network delay, then stores the credentials in a Jotai atom and redirects to `/`.
2. On **`/`**, enter the **same email and password** you registered with to see the success toast (`"Login successful, <your name> 👋🏻!"`). Mismatched fields produce targeted error toasts.
3. Click the sun/moon icon in the header to toggle between **light** and **dark** themes — toast styles follow the active theme.

### Validation rules

Defined in [`src/lib/zodSchema.ts`](./src/lib/zodSchema.ts):

| Field    | Rule                            |
| -------- | ------------------------------- |
| fullName | 6–60 characters (register only) |
| email    | Must be a valid email address   |
| password | 8–60 characters                 |

Errors are rendered inline below each field via Base UI's `<FieldError>` primitive.

## 🤝 Contributing

Contributions are welcome! To get started:

1. **Fork** the repository and create a feature branch:
   ```bash
   git checkout -b feature/your-feature
   ```
2. Make your changes and ensure everything still passes:
   ```bash
   npm run lint
   npm run build
   ```
3. **Commit** with a clear, conventional message and open a **Pull Request** describing the change.

Please open an issue first if you'd like to propose a significant change, so we can discuss the approach.

## 📄 License

This project is released under the **MIT License**. See the [`LICENSE`](./LICENSE) file for the full text.

## 👤 Maintainer

**Piyush Sarkar**

- 🐙 GitHub: [@piyushsarkar-dev](https://github.com/piyushsarkar-dev)
- 🏠 Repository: [github.com/piyushsarkar-dev/auth-form-app](https://github.com/piyushsarkar-dev/auth-form-app)

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org), [React](https://react.dev), and [TypeScript](https://www.typescriptlang.org) for the foundation.
- [shadcn/ui](https://ui.shadcn.com) and [Base UI](https://base-ui.com) for the accessible component primitives.
- [Tailwind CSS](https://tailwindcss.com) for utility-first styling.
- [react-hook-form](https://react-hook-form.com), [Zod](https://zod.dev), [Jotai](https://jotai.org), [next-themes](https://github.com/pacocoursey/next-themes), [react-toastify](https://fkhadra.github.io/react-toastify), and [lucide](https://lucide.dev) for the polished DX.

---

_Made with ❤️ by Piyush Sarkar._
