import reverse from "../src/index.js";

test("sex", () => {
  expect(reverse("hello")).toEqual("olleh");
  expect(reverse("")).toEqual("");
});
