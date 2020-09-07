# Essential Typescript Book

## Changes from the book.

### Chapter 19 - Create a React App

1) Don't install `create-react-app` globally see: https://create-react-app.dev/docs/adding-typescript

> If you've previously installed create-react-app globally via npm install -g create-react-app, we recommend you uninstall the package using npm uninstall -g create-react-app to ensure that npx always uses the latest version.
> 
> Global installs of create-react-app are no longer supported.

2) Instead install using:
```
npx create-react-app reactapp --template typescript
```
See: https://create-react-app.dev/docs/adding-typescript

3) However by default `npx create-react-app ...`  installs the `yarn` version without a `package-lock.json` file (if you the installer finds you have `yarn` installed).  This means that when you subsequently use `npm install` it will remove all those packages not referenced in `package-lock.json` - ie all the packages. 

To solve use one of the following:
* Recreate the `package-lock.json` file with `npm install --package-lock-only`
* Force `npx create-react-app ...` to use `npm` rather than `yarn` by adding `--use-npm` to: `npx create-react-app reactapp --template typescript --use-npm` - see: https://github.com/facebook/create-react-app/issues/7440
* Use `yarn` rather than `npm` for installing subsequent packages. 