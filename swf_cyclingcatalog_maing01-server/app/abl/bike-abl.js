const {Validator} = require("uu_appg01_server").Validation;
const {DaoFactory, ObjectStoreError} = require("uu_appg01_server").ObjectStore;
const {ValidationHelper} = require("uu_appg01_server").AppServer;
const path = require("path");
const Errors = require("../api/errors/bike-error.js");
const {LoggerFactory} = require("uu_appg01_server").Logging;

const logger = LoggerFactory.get("UuBikes.Abls.BikeAbl");


const WARNINGS = {
  createUnsupportedKeys: {
    code: `${Errors.Create.UC_CODE}unsupportedKeys`
  }
};

class BikeAbl {
  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("bike");
  }

  async update(awid, dtoIn) {
    let dtoOut;
    try {
      dtoOut = await this.dao.update(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        // A3
        throw new Errors.Create.BikeDaoCreateFailed(e);
      }
      throw e;
    }
    return dtoOut;
  }

  async delete(awid, dtoIn) {
    try {
      await this.dao.delete(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        // A3
        throw new Errors.Create.BikeDaoCreateFailed({uuAppErrorMap}, e);
      }
      throw e;
    }

  }

  async create(awid, dtoIn, session, authorizationResult) {
    // hds 1, 1.1
    let validationResult = this.validator.validate("bikeCreateDtoInType", dtoIn);
    // hds 1.2, 1.3 // A1, A2
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.createUnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    // hds 2
    // dtoIn.visibility = authorizationResult.getAuthorizedProfiles().includes('3688-6948-1');

    if (logger.isDebugLoggable()) {
      logger.debug("Creating bike with parameters: " + JSON.stringify(dtoIn));
    }

    // hds 3
    dtoIn.uuIdentity = session.getIdentity().getUuIdentity();
    dtoIn.uuIdentityName = session.getIdentity().getName();

    dtoIn.awid = awid;
    let dtoOut;
    try {
      dtoOut = await this.dao.create(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        // A3
        throw new Errors.Create.BikeDaoCreateFailed({uuAppErrorMap}, e);
      }
      throw e;
    }

    // hds 3
    dtoOut.uuAppErrorMap = uuAppErrorMap;
    return dtoOut;
  }

  async bikeList(awid, dtoIn) {
    dtoIn.awid = awid;
    let dtoOut;
    try {
      dtoOut = await this.dao.bikeList(dtoIn);
    } catch (e) {
      if (e instanceof ObjectStoreError) {
        // A3
        console.log(e);
      }
      throw e;
    }
    return dtoOut;
  }
}

module.exports = new BikeAbl();
