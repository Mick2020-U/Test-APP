"use strict";
const { UseCaseError } = require("uu_appg01_server").AppServer;

class CyclingcatalogMainUseCaseError extends UseCaseError {
  static get ERROR_PREFIX() {
    return "swf-cyclingcatalog-main/";
  }

  constructor(dtoOut, paramMap = {}, cause = null) {
    if (paramMap instanceof Error) {
      cause = paramMap;
      paramMap = {};
    }
    super({ dtoOut, paramMap, status: 400 }, cause);
  }
}

module.exports = CyclingcatalogMainUseCaseError;
