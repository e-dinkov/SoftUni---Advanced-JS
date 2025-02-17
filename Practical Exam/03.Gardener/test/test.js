import { assert } from "chai";
import { homeGardener } from "../homeGardener.js";

describe("Tests …", function () {
  describe("plantCareInstructions(plantType) ", function () {
      it("invalid type", function () {
          assert.throw(
            () => homeGardener.plantCareInstructions(112),
            "Invalid plant type!"
          );
      });
      it("succulent", function () {
        
          const result = homeGardener.plantCareInstructions("succulent")
          const resultMsg = "Succulents require minimal watering, indirect sunlight, and well-draining soil."
         assert.equal(result,resultMsg)
      });
      it("vegetable", function () {
        const result = homeGardener.plantCareInstructions("vegetable");
        const resultMsg =
          "Vegetables need full sun, regular watering, and nutrient-rich soil.";
        assert.equal(result, resultMsg);
      });
      it("flowering", function () {
        const result = homeGardener.plantCareInstructions("flowering");
        const resultMsg =
          "Flowering plants require moderate watering, occasional fertilization, and pruning."
        assert.equal(result, resultMsg);
      });
      it("tree", function () {
        const result = homeGardener.plantCareInstructions("tree");
        const resultMsg =
          "Trees need deep watering, proper spacing, and regular mulching.";
        assert.equal(result, resultMsg);
      });

  });
    describe("availablePlants(plantSizes, maxHeight) ", function () {
        it('Invalid information', function () {
            assert.throw(
              () => homeGardener.availablePlants([], 23),
              "Invalid Information!"
            );
        })
        it("Invalid information", function () {
          assert.throw(
            () => homeGardener.availablePlants([2,4,3], 0),
            "Invalid Information!"
          );
        });
        it("Invalid information", function () {
          assert.throw(
            () => homeGardener.availablePlants(11, 23),
            "Invalid Information!"
          );
        });
        it("Invalid information", function () {
          assert.throw(
            () => homeGardener.availablePlants([2,4], "32"),
            "Invalid Information!"
          );
        });
        it("valid Input", function () {
            const result = homeGardener.availablePlants([1, 2, 3, 4], 2)
            const resultMsg = `There are 2 plants suitable for your garden height criteria!`
            assert.equal(result, resultMsg);
        })
          it("valid Input", function () {
            const result = homeGardener.availablePlants([8,9], 5);
              const resultMsg = `There are 0 plants suitable for your garden height criteria!`;
              assert.equal(result,resultMsg)
          });
    });
    describe("gardenExpenses (tools, seeds, discount) ", function () {
      it("Invalid Input", function () {
        assert.throw(
          () => homeGardener.gardenExpenses([1, 2], [1, 2], 2),
          "Invalid Information!"
        );
      });
      it("Invalid Input", function () {
        assert.throw(
          () => homeGardener.gardenExpenses([1, 2], 2, true),
          "Invalid Information!"
        );
      });
      it("Invalid Input", function () {
        assert.throw(
          () => homeGardener.gardenExpenses("kur", [1, 2], true),
          "Invalid Information!"
        );
      });
      it("valid Input", function () {
        const result = homeGardener.gardenExpenses(
          ["watering can", "watering can"],
          ["vegetable seeds", "vegetable seeds"],
          true
        );
        const resultMsg =
          "You spent $27.00 on tools and seeds with a 10% discount!";
        assert.equal(result, resultMsg);
      });
      it("valid Input", function () {
        const result = homeGardener.gardenExpenses(
          ["watering can", "rake","shovel"],
          ["vegetable seeds", "flower seeds","herb seeds"],
          false
        );
        const resultMsg = "You spent $66.00 on tools and seeds!";
        assert.equal(result, resultMsg);
      });
        it("valid Input", function () {
          const result = homeGardener.gardenExpenses(
            ["watering can", "rake", "shovel"],
            ["vegetable seeds", "flower seeds", "herb seeds"],
            true
          );
          const resultMsg =
            "You spent $59.40 on tools and seeds with a 10% discount!";
          assert.equal(result, resultMsg);
        });
    })
    

});
