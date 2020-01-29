const UuBikesError = require("./uu-bikes-error");

const Create = {
  UC_CODE: `${UuBikesError.ERROR_PREFIX}bike/create`,

  InvalidDtoIn: class extends UuBikesError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  }
};

const Delete = {
  UC_CODE: `${UuBikesError.ERROR_PREFIX}bike/delete/`,

};

module.exports = {
  Delete,
  Create
};
