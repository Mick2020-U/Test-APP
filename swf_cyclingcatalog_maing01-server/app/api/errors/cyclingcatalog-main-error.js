"use strict";
const CyclingcatalogMainUseCaseError = require("./cyclingcatalog-main-use-case-error.js");

const Init = {
  UC_CODE: `${CyclingcatalogMainUseCaseError.ERROR_PREFIX}init/`,

  InvalidDtoIn: class extends CyclingcatalogMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  SchemaDaoCreateSchemaFailed: class extends CyclingcatalogMainUseCaseError {
    constructor() {
      super(...arguments);
      this.status = 500;
      this.code = `${Init.UC_CODE}schemaDaoCreateSchemaFailed`;
      this.message = "Create schema by Dao createSchema failed.";
    }
  },

  SetProfileFailed: class extends CyclingcatalogMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Init.UC_CODE}sys/setProfileFailed`;
      this.message = "Set profile failed.";
    }
  }
};

module.exports = {
  Init
};
