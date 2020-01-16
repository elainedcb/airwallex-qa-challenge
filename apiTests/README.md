# Save Bank Details Tests

This folder contains all automated test cases using MochaJS framework

## Execution

```sh
// Install Packages
npm install or npm i

// Execute Tests against Preview Environment
npm run test-preview

// Execute Tests against Demo Environment
npm run test-demo
```

_Note: Make sure to generate the scenarios first using dataGenerator runner before running the tests_

## Folder Structure

1.  _config_ - This folder contains the environment and setup file for global variables.
2.  _data_ - This is where the scenarios json file are located for use in testing generated from the data generator runner (dataGenerator)
3.  _findings_ - All recorded defects, observations or suggestions are in this folder
4.  _methods_ - This folder contains the helper methods and other common methods that are utilised across the tests.
5.  _mochawesome-report_ - This folder is automatically generated whenever tests are completed. This contains the test reports.
6.  _test_ - This folder contains all the automated test cases

## Adding new environment

If a new environment is created for testing, add the information and url in the config/env.json file.

```sh
{
  "preview": {
    "url": "http://preview.airwallex.com:30001/"
  },
  "demo": {
    "url": "http://demo.airwallex.com:30001/"
  }
}
```
