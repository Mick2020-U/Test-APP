const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class BikeMongo extends UuObjectDao {
  async createSchema() {
    await super.createIndex({ awid: 1, _id: 1 }, { unique: true });
  }

  async create(bike) {
    return await super.insertOne(bike);
  }

  async update(uuObject) {
    let filter = {
      awid: uuObject.awid,
      id: uuObject.id
    };
    return await super.findOneAndUpdate(filter, uuObject, "NONE");
  }

  async bikeList() {
    return await super.find({});
  }
  async delete(id) {
    return await super.deleteOne(id);
  }
}

module.exports = BikeMongo;
