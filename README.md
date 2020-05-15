![TS Logo](https://miro.medium.com/max/1400/0*8YjrkrZvo9ruLWFE.png)

![Typescript version](https://img.shields.io/badge/typescript-3.9.2-blue)
![Jest version](https://img.shields.io/badge/jest-26.0.1-success)

Non-opinionated typescript starter pack for new projects ⚙

## How to use ?

* Clone this repository
* Run `yarn install` or `npm install`
* Run `yarn run dev` or `npm run dev`
* You are free to do whatever you want

## What does it provide ?

### Pre-configuration

This sample comes with many configuration file targetted for NodeJS:

* Typescript : `tsconfig.json`
* Jest: `jest.config.json`

## Unit testing

This sample provides unit testing with [Jest](https://jestjs.io/)

## Scripts

This sample comes with many script to work faster:

| Script | Description | Command |
| :----- | :---------- | :------ |
| dev | Run concurrently the typescript watcher and nodemon | `concurrently -k -n "Typescript,Node" -p "[{name}]" -c "blue,green" "tsc --watch" "nodemon dist/index.js"`|
|start | Run the compiler then run the compiled file | `tsc && node dist/index.js` |
| build | Build files | `tsc` |
| test | Run jest tests | `jest --verbose` |
| test-watch | Run jest tests using watcher | `jest --verbose --watchAll` |