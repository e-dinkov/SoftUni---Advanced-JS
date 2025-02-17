import { assert } from "chai";
import petAdoptionAgency from "../petAdoptionAgency.js";

describe("Tests …", function () {
  describe("getRecommendedPets ", function () {
    const petList = [
      {
        name: "Bergamot",
        traits: "Charming",
      },
      { name: "Ludmil", traits: "Elated" },
      {
        name: "Stasi",
        traits: "Elated",
      },
    ];

    it("list of pets with desired traits", function () {
      const result = petAdoptionAgency.getRecommendedPets(petList, "Elated");
      const resultMSG = `Recommended pets with the desired traits (Elated): Ludmil, Stasi`;
      assert.equal(result, resultMSG);
    });
    it("Sorry when there are none with desired traits", function () {
      const result = petAdoptionAgency.getRecommendedPets(petList, "kur");
      const resultMSG = `Sorry, we currently have no recommended pets with the desired traits: kur.`;
      assert.equal(result, resultMSG);
    });
    it("Invalid first param", function () {
      assert.throws(
        () => petAdoptionAgency.getRecommendedPets("petList", "kur"),
        `Invalid input`
      );
    });
    it("Invalid second param", function () {
      assert.throws(
        () => petAdoptionAgency.getRecommendedPets(petList, 112),
        `Invalid input`
      );
    });
  });
  describe("adoptPet ", function () {
    it("congrats msg", function () {
      const result = petAdoptionAgency.adoptPet("ibrahim", "emil")
      const resultMsg = `Congratulations, emil! You have adopted ibrahim from the agency. Enjoy your time with your new furry friend!`;
      assert.strictEqual(result,resultMsg)
    });
      it("Invalid first param", function () {
        assert.throws(() => petAdoptionAgency.adoptPet("ibrahim", 112),"Invalid input")
       
        
      });
    it("Invalid second param", function () {
      assert.throws(
        () => petAdoptionAgency.adoptPet([0,1], "1"),
        "Invalid input"
      );
    });
  });
  describe("isPetAvailable ", function () {
    it("Invalid input", function () {
      assert.throws(()=> petAdoptionAgency.isPetAvailable(1123,'nz',[1,2,3]),"Invalid input")
    });
      it("vacinat false case", function () {
        const result = petAdoptionAgency.isPetAvailable("Krum", 12, false)
        const resultMsg = `Great! We have 12 Krum(s) available for adoption, but they need vaccination.`;
        assert.equal(result,resultMsg)
      });
    it("vacinat true case", function () {
      const result = petAdoptionAgency.isPetAvailable("Krum", 12, true);
      const resultMsg = `Great! We have 12 vaccinated Krum(s) available for adoption at the agency.`;
      assert.equal(result, resultMsg);
    });
     it("negative number of pets", function () {
       const result = petAdoptionAgency.isPetAvailable("Krum", 0, true);
       const resultMsg = `Sorry, there are no Krum(s) available for adoption at the agency.`;
       assert.equal(result, resultMsg);
     });
      it("negative number of pets", function () {
        const result = petAdoptionAgency.isPetAvailable("Krum", -3, false);
        const resultMsg = `Sorry, there are no Krum(s) available for adoption at the agency.`;
        assert.equal(result, resultMsg);
      });
  });
  

  
});
