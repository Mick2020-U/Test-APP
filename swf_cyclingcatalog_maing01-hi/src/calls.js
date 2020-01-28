/**
 * Server calls of application client.
 */
import * as UU5 from "uu5g04";
import Plus4U5 from "uu_plus4u5g01";
import { Client } from "uu_appg01";
const Calls = {
  getBikes(dtoInData) {
    return Client.get(
      "http://localhost:8080/swf-cyclingcatalog-maing01/11111111111111111111111111111111/getBikes",
      dtoInData
    );
  },

  create(newBike) {
    return Client.post(
      "http://localhost:8080/swf-cyclingcatalog-maing01/00000000000000000000000000000000-11111111111111111111111111111111/bike/create",
      newBike
    );
  },

  // update(id, updatedJoke) {
  //   return Client.post(
  //     "https://uuappg01-eu-w-1.plus4u.net/uu-jokes-maing01/4ef6a7b01b5942ecbfb925b249af987f/joke/update",
  //     { ...updatedJoke, id }
  //   );
  // },
  //
  // delete(id) {
  //   return Client.post(
  //     "https://uuappg01-eu-w-1.plus4u.net/uu-jokes-maing01/4ef6a7b01b5942ecbfb925b249af987f/joke/delete",
  //     { id }
  //   );
  // }
};


export default Calls;
