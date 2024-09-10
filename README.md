# DevAcademy Boilerplate with Shadcn UI:

## About DevAcademy Boilerplate: React with Express, Vite

This is a starter project that uses Vite to bundle a React app and Express to serve it in production. Express is used in development to serve an API server.

Vite React App: [http://localhost:5173](http://localhost:5173)
Express API Server: [http://localhost:3000](http://localhost:3000)

Requests to `http://localhost:5173/api` are proxied to `http://localhost:3000/api`.

## About Shadcn UI

> Shadcn UI is a set of [beautifully designed components](https://ui.shadcn.com/) that you can copy and paste into your apps. 
> Accessible. Customizable. Open Source.

Shadcn is not a UI component library, instead it allows you build your own component library. Each ui element is ready to go with sensible defaults, but because you own the code, you can tailor each component specifically for your app.

### How to Add UI Components

Browse the [UI components](https://ui.shadcn.com/docs/components/). To use each UI component there are typically three steps:

1. Run the CLI install command (installs into `components/ui`).
2. Copy/paste the import into your react component.
3. Copy/paste ui elements into your react component.

## Setup

### Installation

To use, consider these steps:

- Fork this repo
- Rename your repo according to the app you're building

```sh
git clone https://github.com/[your-account]/[your-app].git
cd [your-app] && npm i
```

To start the development server with a watcher that rebuilds your code, run `npm run dev`.

Additional components should be placed in `client/components`.

### Pre-Installed modules

- Vite
- Vitest
- Express
- Tanstack Query (aka React Query)
- Prettier
- Supertest
- Tailwind
- Shadcn UI
- Superagent
- Knex
- SQLite3

### Recommended modules

| Purpose          | Module           | Installation |
|------------------|------------------|--------------|
| Front end router | React Router Dom | `npm install react-router-dom` |
| Env file         | Dotenv           | `npm install dotenv --save` |

## Setting up the database
Copied from 

### 1. The first migration

- Use `npm run knex migrate:make [Table Name]` to create a migration file
- Convert the migration to an ESM module
  <details style="padding-left: 2em">
    <summary>How to convert your migration to a module</summary>

    To convert our migration functions we just replace this..

    ```js
    exports.up = function (knex) { 
    ```

    ... with

    ```js
    export function up(knex) {
    ```

    and replace ...

    ```js
    exports.down = function (knex) { 
    ```

    ... with

    ```js
    export function down(knex) {
    ```

  </details>
	

- Edit the new file in the new `migrations` folder so it will add (and drop) your table. The documentation for [`dropTable`](https://knexjs.org/guide/schema-builder.html#droptable) might be helpful.

### 2. Seeds

- Use `npm run knex seed:make [Items]` to create a seed file
- Edit the new file in the new `seeds` folder so it will add items to your table
  <details style="padding-left: 2em">
    <summary>Tip</summary>
  First, we need to convert it to an ESM module by changing from this:

  ```js
  exports.seed = async function (knex) {
  ```

  to this...

  ```js
  export async function seed(knex) {
  ```

  The documentation for [`del`](https://knexjs.org/guide/query-builder.html#del-delete) and [`insert`](https://knexjs.org/guide/query-builder.html#insert) might be helpful.
  </details>

### 3. Viewing data in the database

- Use `npm run knex migrate:latest` to apply the changes to the database
- Run `npm run knex seed:run` to add the new data to the database

---
