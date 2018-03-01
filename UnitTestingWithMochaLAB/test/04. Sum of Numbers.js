function sum(arr) {
    let sum = 0
    for (num of arr)
        sum += Number(num)
    return sum
}

describe("sum(arr) - sum array of numbers", function () {
    let expect = require('chai').expect

    it("should return 3 for [1, 2]", function () {
        expect(sum([1, 2])).to.be.equal(3)
    })
    it("should return 1 for [1]", function () {
        expect(sum([1])).to.be.equal(1)
    })
    it("should return 0", function () {
        expect(sum([])).to.be.equal(0)
    })
})

