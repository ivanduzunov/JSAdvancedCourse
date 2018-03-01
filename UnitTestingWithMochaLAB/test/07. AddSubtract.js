function createCalculator() {
    let value = 0;
    return {
        add: function (num) {
            value += Number(num);
        },
        subtract: function (num) {
            value -= Number(num);
        },
        get: function () {
            return value;
        }
    }
}

let expect = require('chai').expect

describe("createCalculator", function () {
    let calculator = createCalculator()
    it("", function () {
        expect(typeof createCalculator).to.be.equal('function')
    })

    it("", function () {
        expect(typeof calculator).to.be.equal('object')
    })

    it("", () => {
        expect(calculator.hasOwnProperty('add')).to.be.true
    })

    it("", () => {
        expect(calculator.hasOwnProperty('subtract')).to.be.true
    })

    it("", () => {
        expect(calculator.hasOwnProperty('get')).to.be.true
    })

    it("", () => {
        expect(calculator.get()).to.be.equal(0)
    })

    it("", function () {
        expect(calculator.value).to.be.equal(undefined)
    })

    it("", function () {
        calculator.add(1)
        calculator.add(2)
        expect(calculator.get()).to.be.equal(3)
    })
    let calc = createCalculator()
    it("", function () {
        calc.add(2)
        calc.add(1)
        expect(calc.get()).to.be.equal(3)
    })
    let calc2 = createCalculator()
    it("", function () {
        calc2.add('1')
        calc2.add('2')
        expect(calculator.get()).to.be.equal(3)
    })

})