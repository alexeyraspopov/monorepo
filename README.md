# The Monorepo

Simple monorepo that uses [NPM Workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces).

- Clone the repo
- `npm install` to install everything required for any package
- `npm start --workspace=packages/project-a` or `cd packages/project-a; npm start` to run a package
- `npm test --workspaces` to run `test` script in every package where it's available
- `npm run build --workspaces` to build all apps

## Details

- All dependencies are stored in a single place and deduped
- Packages can use sibling packages without versioning and publishing to registries
- I added a prefix `@monorepo/` to packages name to avoid naming clashes in `node_modules`
- Vite, Jest, Flow, and ESLint work just fine with workspaces
