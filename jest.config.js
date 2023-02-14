const { defaults } = require("jest-config");

module.exports = {
  collectCoverageFrom:['./src/*'],
  collectCoverage: true,
  coverageReporters: ["json"],
};
