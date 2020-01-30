const BikeAbl = require("../../abl/bike-abl");

class BikeController {
  delete(ucEnv) {
    return BikeAbl.delete(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  bikeList(ucEnv) {
    return BikeAbl.bikeList(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  create(ucEnv) {
    return BikeAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }
}

module.exports = new BikeController();
