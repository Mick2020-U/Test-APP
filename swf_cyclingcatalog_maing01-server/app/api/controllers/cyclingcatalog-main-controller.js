"use strict";
const CyclingcatalogMainAbl = require("../../abl/cyclingcatalog-main-abl.js");

class CyclingcatalogMainController {
  init(ucEnv) {
    return CyclingcatalogMainAbl.init(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
}

module.exports = new CyclingcatalogMainController();
