# TypeScript examples

These examples correspond to the main takeaways from the 7 chapters of "TypeScript in 50 lessons".

This example requires TypeScript and TS Node.

Install them using the below commands:

```bash
npm install -g typescript
```

```bash
npm install -g ts-node
```

## Available CLI commands

Run your code using the following function:

```bash
ts-node {filename}.ts
```

Replace `{filename}.ts` with the name of your file (i.e. `testWithInferedTypes.ts`).

This function will simply run your code and if it breaks or has errors, it will let you know. You can use `console.log` to output anything into your terminal.

---

Let TypeScript run it's checks and emit a JavaScript version of your code:

```bash
tsc
```

---

Add `--watch` for TypeScript to continually check your files everytime you save them (instead of running `tsc` every time):

```bash
tsc --watch
```

---

Let TypeScript run it's checks and emit a JavaScript version of your code (but for a single file only):

```bash
tsc {filename}.ts
```

Replace `{filename}.ts` with the name of your file (i.e. `testWithInferedTypes.ts`).

---

You can also add a `--noEmit` flag to your `tsc` command in order to run the Type checks but not emit any JavaScript files.
