import type { Component } from "solid-js";
import { createSignal } from "solid-js";

const App: Component = () => {
  const [count, setCount] = createSignal(0);
  return (
    <div class="text-center">
      <header class="bg-#282c34 min-h-100vh flex flex-col items-center justify-center color-white">
        <div class="logo" />
        <h1 class="mt-2em animate-bounce-alt animate-duration-2s">
          Hello Vite + Solid!
        </h1>
        <p>
          <button
            class="bg-blue-400 hover:bg-blue-500 text-sm text-white font-mono font-light py-2 px-4 rounded border-2 border-blue-200 dark:bg-blue-500 dark:hover:bg-blue-600"
            type="button"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count()}
          </button>

          <button
            bg="red-400 hover:red-500 dark:red-500 dark:hover:red-600"
            text="sm white"
            font="mono light"
            p="y-2 x-4"
            m="l-1em"
            border="2 rounded blue-200"
            type="button"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count()}
          </button>
        </p>
        <label>
          <input type="checkbox" name="default" checked /> Browser default
        </label>
        <label>
          <input type="checkbox" class="accent-pink-500" checked />
          Customized
        </label>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            class="color-#4f88c6"
            href="https://www.solidjs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solid Docs
          </a>
          {" | "}
          <a
            class="color-#4f88c6"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
};

export default App;
