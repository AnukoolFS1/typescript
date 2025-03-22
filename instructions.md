# TypeScript Commands Cheat Sheet

## 🔹 1. TypeScript Compiler (`tsc`) Commands
The `tsc` command is used to compile TypeScript files into JavaScript.

### 🏗️ Basic Compilation
```bash
tsc filename.ts
```
- Compiles `filename.ts` into `filename.js`.

```bash
tsc filename.ts --outFile output.js
```
- Compiles `filename.ts` into `output.js`.

---

### ⚡ Compilation with Different Targets
```bash
tsc filename.ts --target ESNEXT
tsc filename.ts --target ES6
tsc filename.ts --target ES5
```
- Specifies ECMAScript target version.

---

### 📁 Compiling Multiple Files
```bash
tsc file1.ts file2.ts
```
- Compiles multiple files at once.

```bash
tsc --init
```
- Creates a `tsconfig.json` file for project-wide configuration.

---

## 🔹 2. Working with `tsconfig.json`
Once you have `tsconfig.json`, you can simply run:
```bash
tsc
```
- This will compile the whole project based on the settings in `tsconfig.json`.

```bash
tsc --watch
```
- Watches for changes and re-compiles automatically.

```bash
tsc --project tsconfig.json
```
- Compiles based on a specific `tsconfig.json` file.

---

## 🔹 3. Output Control
```bash
tsc filename.ts --outDir dist/
```
- Places compiled files in the `dist/` directory.

```bash
tsc filename.ts --sourceMap
```
- Generates a `.map` file for debugging.

---

## 🔹 4. Type Checking Only (Without Output)
```bash
tsc --noEmit
```
- Checks for type errors without generating `.js` files.

```bash
tsc --strict
```
- Enables all strict type-checking options.

---

## 🔹 5. Module System
```bash
tsc filename.ts --module CommonJS
tsc filename.ts --module ES6
```
- Specifies the module system for output files.

---

## 🔹 6. Running TypeScript Without Compilation
You can run TypeScript files directly using `ts-node` (requires installation).
```bash
npx ts-node filename.ts
```

---

## 🔹 7. TypeScript Help
```bash
tsc --help
```
- Lists all available options.

---
