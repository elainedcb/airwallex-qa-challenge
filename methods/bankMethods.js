const helper = require("./helpers");
const convertScenariosCsvToJson = async () => {
  let scenarioCsvPath = `${__root}/data/scenarios_${env}.csv`;

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

  helper.writeJsonFile(scenarios, `${__root}/data/scenarios_${env}.json`);
};

const saveBankDetails = async requestData => {
  return new Promise((resolve, reject) => {
    chai
      .request(url)
      .post(saveBankDetailsEndpoint)
      .set("Content-Type", "application/json")
      .send(requestData)
      .end((err, res) => {
        if (err) {
          reject(err);
        }
        if (res) {
          resolve(res);
        }
      });
  });
};

const generateExpectedResponse = (expectedStatus, expectedMessage) => {
  let expectedResponseBody;
  if (expectedStatus == 200) {
    expectedResponseBody = {
      success: expectedMessage
    };
  } else {
    expectedResponseBody = {
      error: expectedMessage
    };
  }

  return expectedResponseBody;
};

module.exports = {
  convertScenariosCsvToJson,
  saveBankDetails,
  generateExpectedResponse
};
