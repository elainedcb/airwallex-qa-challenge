const csvScenariosToJson = async () => {
  let scenarioCsvPath = "data/scenarios.csv";
  const jsonArray = await csv().fromFile(scenarioCsvPath);
  console.log(jsonArray);
  fs.writeFile("data/scenarios.json", JSON.stringify(jsonArray), function(err) {
    if (err) throw err;
    console.log("json scenarios are saved");
  });
};

const writeJsonFile = (json, fileName) => {
  fs.writeFileSync(fileName, JSON.stringify(json, null, 2));
};

module.exports = {
  csvScenariosToJson,
  writeJsonFile
};
