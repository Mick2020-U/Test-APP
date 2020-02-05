const BikeAbl = require("../../abl/bike-abl");

class BikeController {

  update(ucEnv) {
    return BikeAbl.update(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getSession());
  }
  delete(ucEnv) {
    return BikeAbl.delete(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  bikeList(ucEnv) {
    return BikeAbl.bikeList(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  create(ucEnv) {
    return BikeAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn(), ucEnv.getSession(), ucEnv.getAuthorizationResult());
  }
}

module.exports = new BikeController();
