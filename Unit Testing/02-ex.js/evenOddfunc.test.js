import { expect } from "chai";
import { isOddOrEven } from "./evenOddfun.js";
import { describe, it } from "mocha";
describe("02. Is even or odd function", function () {
    it("Test for undefined number", function () {
        expect(isOddOrEven(1)).to.equals(undefined)
    })
     it("Test for undefined array", function () {
       expect(isOddOrEven([2,1,4])).to.equals(undefined);
     });
     it("Test for undefined object", function () {
       expect(isOddOrEven({key:"value"})).to.equals(undefined);
     });
     it("Test for even string", function () {
       expect(isOddOrEven("aaff")).to.equals("even");
     });
     it("Test for odd string", function () {
       expect(isOddOrEven("aaf")).to.equals("odd");
     });
    
})