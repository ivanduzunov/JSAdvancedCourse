let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

let expect = require('chai').expect

describe("mathEnforcer", function () {
    it("", function () {
        expect(mathEnforcer.addFive('Levski')).to.be.equal(undefined)
    })

    it("", function () {
        expect(mathEnforcer.addFive(5)).to.be.equal(10)
    })

    it("", function () {
        expect(mathEnforcer.addFive(-5)).to.be.equal(0)
    })

    it("", function () {
        expect(mathEnforcer.subtractTen('Levski')).to.be.equal(undefined)
    })

    it("", function () {
        expect(mathEnforcer.subtractTen(20)).to.be.equal(10)
    })

    it("", function () {
        expect(mathEnforcer.subtractTen(-20)).to.be.equal(-30)
    })

    it("", function () {
        expect(mathEnforcer.sum(1914, 'Levski')).to.be.equal(undefined)
    })

    it("", function () {
        expect(mathEnforcer.sum('Levski', 1914)).to.be.equal(undefined)
    })

    it("", function () {
        expect(mathEnforcer.sum('Levski', 'Sofia')).to.be.equal(undefined)
    })

    it("", function () {
        expect(mathEnforcer.sum(1, 2)).to.be.equal(3)
    })

    it("", function () {
        expect(mathEnforcer.sum(1.1, 2)).to.be.equal(3.1)
    })

    it("", function () {
        expect(mathEnforcer.sum(-1.1, 2)).to.be.equal(0.8999999999999999)
    })

    it("", function () {
        expect(mathEnforcer.sum(-10, 20)).to.be.equal(10)
    })
    it("", function () {
        expect(mathEnforcer.sum(-10, 5)).to.be.equal(-5)
    })
})
