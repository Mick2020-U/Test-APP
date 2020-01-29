const BikeAbl = require("../../abl/bike-abl");

class BikeController {

  getBikes(ucEnv) {
    return BikeAbl.getBikes(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  create(ucEnv) {
    return BikeAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new BikeController();
