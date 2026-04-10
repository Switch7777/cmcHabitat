<!-- BEGIN:nextjs-agent-rules -->
# Next.js 12 (Pages Router)

This project uses **Next.js 12** with the **Pages Router** (`pages/` directory). Do NOT use App Router conventions (`app/`, `"use client"`, `export const metadata`, etc.).

Key conventions:
- Pages go in `pages/` directory
- Global layout is in `pages/_app.js`
- Custom document is in `pages/_document.js`
- `next/link` requires an `<a>` child element
- `next/image` uses `layout` prop (`fill`, `responsive`, `intrinsic`), NOT the `fill` boolean prop
- No `"use client"` directive — all components are client-rendered by default
<!-- END:nextjs-agent-rules -->
