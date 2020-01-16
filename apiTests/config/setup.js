global.superagent = require("superagent");
global.csv = require("csvtojson");
global.path = require("path");
global.fs = require("fs");

global.chai = require("chai");
global.expect = chai.expect;
chai.use(require("chai-http"));
chai.request.Request = chai.request.Test;
require("superagent-proxy")(chai.request);
chai.use(require("chai-json-schema"));
chai.use(require("deep-equal-in-any-order"));
global.addContext = require("mochawesome/addContext");

global.__root = path.resolve(__dirname, "..");
global.env = process.env.NODE_ENV;

if (env === "ENV") {
  global.url = process.env.url;
} else {
  let envars = require("./env.json");
  global.url = envars[env].url;
}

console.log("------------------------------------------------------");
console.log("TEST ENVIRONMENT:", env);
console.log("------------------------------------------------------");

global.saveBankDetailsEndpoint = "bank";
