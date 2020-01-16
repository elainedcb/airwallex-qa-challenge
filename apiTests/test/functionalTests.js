describe("Functional Tests: Save Bank Details Tests", () => {
  const scenarios = require(`${__root}/data/scenarios_${env}.json`);
  const bankMethods = require(`${__root}/methods/bankMethods`);

  scenarios.forEach(scenario => {
    it(`Test Bank Details: ${scenario.description}`, async () => {
      let expectedStatus = parseInt(scenario.expectedStatus);
      let expectedMessage = scenario.expectedMessage;
      let expectedResponse = bankMethods.generateExpectedResponse(
        expectedStatus,
        expectedMessage
      );
      let response = await bankMethods.saveBankDetails(scenario.requestData);

      console.log("Expected Response", expectedResponse);
      console.log("Actual Response", response.body);

      expect(response).to.have.status(expectedStatus);

      expect(JSON.stringify(response.body)).to.equal(
        JSON.stringify(expectedResponse)
      );
    });
  });
});
