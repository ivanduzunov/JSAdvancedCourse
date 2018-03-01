function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) === JSON.stringify(reversed));
    return equal;
}

let expect = require('chai').expect

describe("isSymmetric(arr)", function () {
    it("", function () {
        expect(isSymmetric('not array')).to.be.false
    })

    it("", function () {
        expect(isSymmetric([1,2,1])).to.be.true
    })

    it("", function () {
        expect(isSymmetric([1,2,3])).to.be.false
    })
    it("", function () {
        expect(isSymmetric([1])).to.be.true
    })

    it("", function () {
        expect(isSymmetric([1,2,3,4])).to.be.false
    })
    it("", function () {
        expect(isSymmetric([1,2,2,1])).to.be.true
    })
    it("", () => {
        expect(isSymmetric([5, 'hi', {a:5}, new Date(), {a:5}, 'hi', 5])).to.be.true;
    })
})