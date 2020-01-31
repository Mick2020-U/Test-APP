const {TestHelper} = require("uu_appg01_workspace-test");

beforeEach(async () => {
  // fire up application and database
  await TestHelper.setup();
  // call sys/initApp endpoint
  await TestHelper.initApp();
});

afterEach(() => {
  TestHelper.teardown();
});

describe("Bike uuCMD tests", () => {
  test("example 01 test - bike/create", async () => {
    const bike = {
      name: "first",
      role: {
        en: "first desc"
      }
    };
    let result = await TestHelper.executePostCommand("bike/create", {joke: bike});

    expect(result.data.bike).toEqual(bike);
    expect(result.data.uuAppErrorMap).toEqual({});
  });
});
