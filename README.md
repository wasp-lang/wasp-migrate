# Wasp Migrate

Official tool for migrating your Wasp project from an older to a newer version.

## Usage

### Migrate from Wasp 0.11 to 0.12

Run `npx wasp-migrate <your-wasp-project-dir-name>` in your terminal while positioned in the parent dir of your Wasp project (so one level above your Wasp project).

This will perform initial part of migrating your Wasp project from 0.11 to 0.12, but will not do the complete migration, since some steps (auth) need to be done manually.

## Contributor's Corner

### How it works

- Uses Typescript.
- Uses Rollup and Esbuild to bundle the code.
- It specifies an `npx` command so it can be used with `npx wasp-migrate` without installing it globally.

### Testing it locally

Run `npm run bundle` to build the code and then run the `./dist/index.js` from the parent directory of the Wasp project you want to test it on.

You can additionally set `WASP_MIGRATE_DEV`` env var to tell it to use `wasp-cli` instead of `wasp` bin.

Example (where `websockets-realtime-voting` is a Wasp app inside `wasp/examples/` dir):
```
cd ~/git/wasp-lang/wasp/examples/
WASP_MIGRATE_DEV=1 ~/git/wasp-lang/wasp-migrate/dist/index.js websockets-realtime-voting/
```

### Publishing to npm

If the version in the `package.json` changes on `main`, Github Actions it automatically publishes this package to NPM.

For this to work, we have set `NPM_TOKEN` in "Repository secrets" in the settings of this repo. This NPM token gives read/write access to `wasp-migrate` repo.
