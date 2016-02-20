const expect = require('chai').expect;
const fda = require('../index.js');

describe('#abbreviated', function() {
  it('returns a non-empty array', function (done) {
    fda.abbreviated(function(data) {
      expect(data).to.not.be.empty;
      done();
    });
  });
});

describe('#_parseLineToObject', function() {
  var line = null;
  var result = null;

  before(function() {
    line = "~09522~^~CRANBERRY JUC BLEND,100% JUC,BTLD,W/ ADDED VIT C & CA~^88.60^45^0.27^0.12^0.10^10.91^0.1^9.80^19^0.08^5^8^76^6^0.05^0.016^0.067^0.1^31.5^0.005^0.015^0.094^^0.018^18^0^18^18^1.8^0.00^25^1^0^0^15^0^0^68^0.01^0.0^0^0.0^0.002^0.002^0.002^0^200^~6.75 fl oz~^240^~8 fl oz~^0";
    result = fda._parseLineToObject(line);
  }),

  it('takes a line from the file and returns an object with all fields', function() {
    console.log(result);
      expect(result.ndbNo).to.equal(9522);
      expect(result.shortDescription).to.equal("CRANBERRY JUC BLEND,100% JUC,BTLD,W/ ADDED VIT C & CA");
      expect(result.water).to.equal(88.60)
      expect(result.calories).to.equal(45)
      expect(result.protein).to.equal(0.27)
      expect(result.fat).to.equal(0.12)
      expect(result.ash).to.equal(0.10)
      expect(result.carbohydrate).to.equal(10.91)
      expect(result.fiber).to.equal(0.1)
      expect(result.sugar).to.equal(9.80)
      expect(result.calcium).to.equal(19)
      expect(result.iron).to.equal(0.08)
      expect(result.magnesium).to.equal(5)
      expect(result.phosphorus).to.equal(8)
      expect(result.potassium).to.equal(76)
      expect(result.sodium).to.equal(6)
      expect(result.zinc).to.equal(0.05)
      expect(result.copper).to.equal(0.016)
      expect(result.manganese).to.equal(0.067)
      expect(result.selenium).to.equal(0.1)
      expect(result.vitaminC).to.equal(31.5)
      expect(result.thiamin).to.equal(0.005)
      expect(result.riboflavin).to.equal(0.015)
      expect(result.niacin).to.equal(0.094)
      expect(result.pantoAcid).to.equal(0)
      expect(result.vitaminB6).to.equal(0.018)
      expect(result.folateTotal).to.equal(18)
      expect(result.folicAcid).to.equal(0)
      expect(result.foodFolate).to.equal(18)
      expect(result.folateDFE).to.equal(18)
      expect(result.choline).to.equal(1.8)
      expect(result.vitaminB12).to.equal(0.00)
      expect(result.vitaminAIU).to.equal(25)
      expect(result.vitaminARAE).to.equal(1)
      expect(result.retinol).to.equal(0)
      expect(result.alphaCarot).to.equal(0)
      expect(result.betaCarot).to.equal(15)
      expect(result.betaCrypt).to.equal(0)
      expect(result.lycopene).to.equal(0)
      expect(result.luteinZeazanthin).to.equal(68)
      expect(result.vitaminE).to.equal(0.01)
      expect(result.vitaminDMCG).to.equal(0.0)
      expect(result.vitaminDIU).to.equal(0)
      expect(result.vitaminK).to.equal(0.0)
      expect(result.saturatedFat).to.equal(0.002)
      expect(result.monosaturatedFat).to.equal(0.002)
      expect(result.polyunsaturatedFat).to.equal(0.002)
      expect(result.cholesterol).to.equal(0)
      expect(result.weight1).to.equal(200)
      expect(result.weight1Description).to.equal("6.75 fl oz")
      expect(result.weight2).to.equal(240)
      expect(result.weight2Description).to.equal("8 fl oz")
      expect(result.refusePercent).to.equal(0)
  });
});

