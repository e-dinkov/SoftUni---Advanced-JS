import { describe, it } from "mocha";
import { lookupChar } from "./func.js";
import { expect } from "chai";
describe("Retrieves character from a string via index.", function () {
    it("Invalid type input", function () {
        
    expect(lookupChar(1,1)).to.equal(undefined)
        
    })
      it("Invalid type input", function () {
        expect(lookupChar("kur", "kur")).to.equal(undefined);
      });
      it("Invalid type input", function () {
        expect(lookupChar(1, "pari")).to.equal(undefined);
      });
      it("Invalid index input", function () {
        expect(lookupChar("pari", 4)).to.equal("Incorrect index");
      });
    it("Invalid index input", function () {
      expect(lookupChar("pari", -2)).to.equal("Incorrect index");
    });
    it("Valid inputs", function () {
      expect(lookupChar("pari", 2)).to.equal("r");
    });
      it("Valid inputs", function () {
        expect(lookupChar("pari", 0)).to.equal("p");
      });
    describe("Retrieves character from a string via index.", function () {
      it("Invalid type input", function () {
        expect(lookupChar(1, 1)).to.equal(undefined);
      });
      it("Invalid type input", function () {
        expect(lookupChar("kur", "kur")).to.equal(undefined);
      });
      it("Invalid type input", function () {
        expect(lookupChar(1, "pari")).to.equal(undefined);
      });
      it("Invalid index input", function () {
        expect(lookupChar("pari", 4)).to.equal("Incorrect index");
      });
      it("Invalid index input", function () {
        expect(lookupChar("pari", -2)).to.equal("Incorrect index");
      });
      it("Valid inputs", function () {
        expect(lookupChar("pari", 2)).to.equal("r");
      });
      it("Invalid", function () {
        expect(lookupChar("pari", 1.1)).to.equal(undefined);
      });
    });
    
})