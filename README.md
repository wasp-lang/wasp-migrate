# Wasp Migrate

Run this migration script by running `npx ilakovac-wasp-migrate <dir>` in your terminal while positioned in the parent dir of your project.

### How it works

- Uses Typescript
- Uses Rollup and Esbuild to bundle the code
- If the version in the `package.json` changes it automatically publishes to NPM with https://github.com/marketplace/actions/npm-publish
- It specifies a `npx` command to it can be used with `npx ilakovac-wasp-migrate` without installing it globally

### Publishing to npm

You need to have a `npmjs.com` account and create a `NPM_TOKEN` secret in your repository settings. This is used to authenticate the publish action.