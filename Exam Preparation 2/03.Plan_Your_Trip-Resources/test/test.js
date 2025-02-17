import { assert } from "chai";
import { planYourTrip } from "../planYourTrip.js";
import { expect } from "chai";

describe("Tests …", function () {
  describe("testing ChoosingDestination", function () {
    it("Invalid year", function () {
      assert.throw(
        () => planYourTrip.choosingDestination("Ski Resort", "Winter", 2025),
        "Invalid Year!"
      );
    });
    it("Wrong destination", function () {
      assert.throw(
        () => planYourTrip.choosingDestination("SPA", "Winter", 2024),
        "This destination is not what you are looking for."
      );
    });
     it("Picked destination", function () {
       
         let result = planYourTrip.choosingDestination("Ski Resort", "Winter", 2024)
       let resultMsg =   "Great choice! The Winter is the perfect time to visit the Ski Resort."
     assert.equal(result,resultMsg)
     });
    it("Not picked destination", function () {
      
        const result = planYourTrip.choosingDestination("Ski Resort", "Summer", 2024)
       const resultMsg =  "Consider visiting during the Winter for the best experience at the Ski Resort."
      assert.equal(result,resultMsg)
    });
    
  });
  describe("testing exploreOptions", function () {
    
    it("Invalid first param not an array", function (){
       assert.throw(
         () => planYourTrip.exploreOptions("kuche",1),
         "Invalid Information!"
       );
    })
    it("Invalid second param not a number", function () {
      assert.throw(
        () => planYourTrip.exploreOptions(["Kurvi","Belo"], "i Pari"),
        "Invalid Information!"
      );
    });
     it("Invalid second param outside array", function () {
       assert.throw(
         () => planYourTrip.exploreOptions(["Kurvi", "Belo"], 50),
         "Invalid Information!"
       );
     });
     it("Invalid second param outside array", function () {
       assert.throw(
         () => planYourTrip.exploreOptions(["Kurvi", "Belo"], -2),
         "Invalid Information!"
       );
     });
    it("Invalid second param is not integer", function () {
      assert.throw(
        () => planYourTrip.exploreOptions(["Kurvi", "Belo", "MBT"], 1.5),
        "Invalid Information!"
      );
    });
     it("Removed item", function () {
       
         let result =  planYourTrip.exploreOptions(["Kurvi", "Belo","MBT"], 1)
         let resultMsg = "Kurvi, MBT"
       assert.equal(result,resultMsg)
     });
  })
  describe("estimate expenses", function () {
    it("estimateExpenses", () => {
      expect(() => {
        planYourTrip.estimateExpenses("5", "5");
      }).to.throw("Invalid Information!");

      expect(() => {
        planYourTrip.estimateExpenses(5, "5");
      }).to.throw("Invalid Information!");

      expect(() => {
        planYourTrip.estimateExpenses("5", 5);
      }).to.throw("Invalid Information!");

      expect(() => {
        planYourTrip.estimateExpenses(0, 5);
      }).to.throw("Invalid Information!");

      expect(() => {
        planYourTrip.estimateExpenses(2, -5);
      }).to.throw("Invalid Information!");

      expect(() => {
        planYourTrip.estimateExpenses(-5, 1);
      }).to.throw("Invalid Information!");

      expect(() => {
        planYourTrip.estimateExpenses(2, 0);
      }).to.throw("Invalid Information!");

      expect(() => {
        planYourTrip.estimateExpenses(0, 1);
      }).to.throw("Invalid Information!");

      expect(() => {
        planYourTrip.estimateExpenses(1, true);
      }).to.throw("Invalid Information!");

      expect(() => {
        planYourTrip.estimateExpenses({}, 10);
      }).to.throw("Invalid Information!");

      expect(planYourTrip.estimateExpenses(50, 5)).to.equal(
        "The trip is budget-friendly, estimated cost is $250.00."
      );

      expect(planYourTrip.estimateExpenses(50, 10)).to.equal(
        "The trip is budget-friendly, estimated cost is $500.00."
      );

      expect(planYourTrip.estimateExpenses(500, 5)).to.equal(
        "The estimated cost for the trip is $2500.00, plan accordingly."
      );
    });
  })
  
});
