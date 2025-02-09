import { expect } from "chai";
import { addNumbers } from "./app.js";
import { describe } from "mocha";
describe("Adding numbers", function () {
    it("works with numbers", () => {
        expect(addNumbers(1,1)).to.equal(2)
    })
    it("Doesnt work with string!", () => {
        expect(() =>addNumbers("a","b").to.throw());
    })
})
