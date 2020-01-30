const { TestHelper } = require("uu_appg01_workspace-test");

beforeEach(async () => {
  // fire up application and database
  await TestHelper.setup();
  // call sys/initApp endpoint
  await TestHelper.initApp();
});

afterEach(() => {
  TestHelper.teardown();
});

describe("Joke uuCMD tests", () => {
  test("example 01 test - joke/create", async () => {
    const jokeText = "testJoke01";
    let result = await TestHelper.executePostCommand("joke/create", { joke: jokeText });

    expect(result.data.joke).toEqual(jokeText);
    expect(result.data.uuAppErrorMap).toEqual({});
  });
});
