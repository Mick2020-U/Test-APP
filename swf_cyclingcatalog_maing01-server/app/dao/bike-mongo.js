const {UuObjectDao} = require("uu_appg01_server").ObjectStore;

class BikeMongo extends UuObjectDao {
  async createSchema() {
    await super.createIndex({awid: 1, _id: 1}, {unique: true});
  }

  async create(bike) {
    return await super.insertOne(bike);
  }
  async getBikes() {
    return await super.find({});
  }
}

module.exports = BikeMongo;
