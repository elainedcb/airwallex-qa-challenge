const csv = require("csvtojson");
const fs = require("fs");

const writeJsonFile = (json, fileName) => {
  fs.writeFileSync(fileName, JSON.stringify(json, null, 2));
};

const convertScenariosCsvToJson = async () => {
  let env = process.env.NODE_ENV;
  let scenarioCsvPath = `./data/scenarios_${env}.csv`;

  let scenarios = [];
  let jsonArray = await csv().fromFile(scenarioCsvPath);
  jsonArray.map(testData => {
    let description = `${testData.test_no}. ${testData.bank_country_code} - ${testData.field_to_test}: ${testData.description}`;

    let scenario = {
      description: description,
      requestData: {
        payment_method: testData.payment_method,
        bank_country_code: testData.bank_country_code,
        account_name: testData.account_name,
        account_number: testData.account_number,
        swift_code: testData.swift_code,
        bsb: testData.bsb,
        aba: testData.aba
      },
      expectedStatus: testData.expected_status,
      expectedMessage: testData.expected_message
    };

    scenarios.push(scenario);
  });

  writeJsonFile(scenarios, `../apiTests/data/scenarios_${env}.json`);
};

convertScenariosCsvToJson();
