describe("DataGenerator: Generate Test Data", () => {
  const bankMethods = require(`${__root}/methods/bankMethods`);
  it("DataGenerator: Convert Scenario CSV to JSON per Environment", () => {
    bankMethods.convertScenariosCsvToJson();
  });
});
