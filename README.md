# Save Bank Details Test Automation Repository

## Repositories

### [API Tests](/apiTests/README.md)
Using Mocha + Chai

### [Data Generator](/dataGenerator/README.md)
Function to generate test data

### Defects/Observations
Defects or findings can be found in apiTests/findings folder

## Full Execution

```sh
// 1. Generate Test Data
cd dataGenerator
npm run generate-tests-${env}

// 2. Execute automated test cases
cd apiTests
npm run test-${env}

```
