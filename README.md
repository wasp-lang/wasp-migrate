# Wasp Migrate

Run this migration script by running `npx wasp-migrate <dir>` in your terminal while positioned in the parent dir of your project.

### How it works

- Uses Typescript
- Uses Rollup and Esbuild to bundle the code
- If the version in the `package.json` changes it automatically publishes to NPM with https://github.com/marketplace/actions/npm-publish
- It specifies a `npx` command to it can be used with `npx wasp-migrate` without installing it globally

### Testing it locally

Run `npm run bundle` to build the code and then run the `./bundle/index.js` with the absolute path in the parent dir of your project.

```
/Users/<user>/wasp-migrate/bundle/index.js /Users/<user>/my-projects-parent-dir
```

### Publishing to npm

You need to have a `npmjs.com` account and create a `NPM_TOKEN` secret in your repository settings. This is used to authenticate the publish action.