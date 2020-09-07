# Essential Typescript Book

## Changes from the book.

### Chapter 19 - Create a React App

1) Don't install `create-react-app` globally see: https://create-react-app.dev/docs/adding-typescript

> If you've previously installed create-react-app globally via npm install -g create-react-app, we recommend you uninstall the package using npm uninstall -g create-react-app to ensure that npx always uses the latest version.
> 
> Global installs of create-react-app are no longer supported.

2) Instead install using:
```
npx create-react-app my-app --template typescript
```
See: https://create-react-app.dev/docs/adding-typescript

3) However by default that installs the the `yarn` version without a `package-lock.json` file.  This means that when you subsequently use `npm install` it will remove all those packages not referenced in `package-lock.json` - ie all the packages. 

To solve use one of the following:
* `npm install --package-lock-only`
*  `npx create-react-app my-app --template typescript --use-npm` - see: https://github.com/facebook/create-react-app/issues/7440
* Use `yarn` rather than `npm`

