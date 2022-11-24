import addTo from "../src/example_export_defalt";
import * as StrUtils from '../src/example_export_all';

describe('Test Module Import and Exports', function () {

  describe('Test Default Imports', function () {
    test("should add 2 to a number", () => {
      expect(addTo(5)).toBe(7);
    });
  });

  describe('Test All Import', function () {
    let expected, str;

    beforeEach(() => {
      str = "FOObar";
    });

    test("should remove first character", () => {
      expect(StrUtils.removeFirstCharacter(str)).toBe("OObar");
    });

    test("should remove last character", () => {
      expect(StrUtils.removeLastCharacter(str)).toBe("FOOba");
    });

    test("should make all lowercase", () => {
      expect(StrUtils.makeAllLowerCase(str)).toBe("foobar");
    });

    test("should make all uppercase", () => {
      expect(StrUtils.makeAllUpperCase(str)).toBe("FOOBAR");
    });
  });
});
