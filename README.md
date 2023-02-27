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

