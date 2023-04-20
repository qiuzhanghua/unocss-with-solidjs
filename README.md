# unocss-with-solid

```bash
pnpm create vite solid-sample --template vanilla-ts
```

```bash
cd solid-sample
```

```bash
pnpm add solid-js
# pnpm add -D cross-env
pnpm add -D vite-plugin-solid
pnpm add -D unocss @iconify-json/logos @unocss/core @unocss/preset-icons @unocss/preset-uno
pnpm add -D @unocss/preset-attributify
```

Modify tsconfig.json as
```json
"compilerOptions": {
  "jsx": "preserve",
  "jsxImportSource": "solid-js",
}
```

Add html.d.ts to src
```ts
import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare module 'solid-js' {
    namespace JSX {
        interface HTMLAttributes<T> extends AttributifyAttributes {}
    }
}
```

Reference:
- https://unocss.dev/presets/attributify#typescript-support-jsx-tsx
