function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

let expect = require('chai').expect

describe("isOddOrEven(string)", function () {
    it("notString", function () {
        expect(isOddOrEven(12)).to.be.equal(undefined)
    })

    it("emptyStringEven", function () {
        expect(isOddOrEven('')).to.be.equal('even')
    })

    it("even", function () {
        expect(isOddOrEven('Levski')).to.be.equal('even')
    })

    it("odd", function () {
        expect(isOddOrEven('LevskiSofia')).to.be.equal('odd')
    })
})
