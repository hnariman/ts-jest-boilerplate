import { greet } from "../src";

describe("shall run some test", () => {
  it("shall not fail", () => {
    expect(true).toBeTruthy;
  });
  it("shall greet", () => {
    expect(greet("name")).toEqual("we are the name");
  });
});
