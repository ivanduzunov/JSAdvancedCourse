function lookupChar(string, index) {
    if (typeof(string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

let expect = require('chai').expect

describe("lookupChar(string, index)", function () {

    it("notString", function () {
        expect(lookupChar(12, 12)).to.be.equal(undefined)
    })

    it("notInteger", function () {
        expect(lookupChar('Levski', 'Sofia')).to.be.equal(undefined)
    })

    it("notIntegerAndNotString", function () {
        expect(lookupChar(12, 'Sofia')).to.be.equal(undefined)
    })

    it("tooSmallIndex", function () {
        expect(lookupChar('Levski', -1)).to.be.equal('Incorrect index')
    })

    it("tooBigIndex", function () {
        expect(lookupChar('Levski', 6)).to.be.equal('Incorrect index')
    })

    it("returnChar", function () {
        expect(lookupChar('Levski', 2)).to.be.equal('v')
    })
})
