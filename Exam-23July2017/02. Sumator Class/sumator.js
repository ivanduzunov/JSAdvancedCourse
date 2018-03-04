class Sumator {
    constructor() {
        this.data = [];
    }

    add(item) {
        this.data.push(item);
    }

    sumNums() {
        let sum = 0;
        for (let item of this.data)
            if (typeof (item) === 'number')
                sum += item;
        return sum;
    }

    removeByFilter(filterFunc) {
        this.data = this.data.filter(x => !filterFunc(x));
    }

    toString() {
        if (this.data.length > 0)
            return this.data.join(", ");
        else
            return '(empty)';
    }
}

let expect = require('chai').expect

describe("Sumator", function () {
    it("type", function () {
        let sumator = new Sumator()
        expect(typeof sumator).to.be.equal('object')
    })

    it("created", function () {
        let sumator = new Sumator()
        expect(sumator.toString()).to.be.equal('(empty)')
    })

    it("add", function () {
        let sumator = new Sumator()
        sumator.add(1)
        expect(sumator.toString()).to.be.equal('1')
    })

    it("addMixed", function () {
        let sumator = new Sumator()
        sumator.add(1)
        sumator.add('item')
        expect(sumator.toString()).to.be.equal('1, item')
    })

    it("addMixedAndFloat", function () {
        let sumator = new Sumator()
        sumator.add(1)
        sumator.add('item')
        sumator.add(1.3)
        expect(sumator.toString()).to.be.equal('1, item, 1.3')
    })

    it("sumOnlyNumbersInArr", function () {
        let sumator = new Sumator()
        sumator.add(1)
        sumator.add(1)
        expect(sumator.sumNums()).to.be.equal(2)
    })

    it("sumNotOnlyFloatNumbersInArr", function () {
        let sumator = new Sumator()
        sumator.add(1)
        sumator.add(1.7)
        expect(sumator.sumNums()).to.be.equal(2.7)
    })

    it("sumOnlyFloatNumbersInArr", function () {
        let sumator = new Sumator()
        sumator.add(1.1)
        sumator.add(1.7)
        expect(sumator.sumNums()).to.be.equal(2.8)
    })

    it("sumOnlyFloatNumbersAndStringInArr", function () {
        let sumator = new Sumator()
        sumator.add(1.1)
        sumator.add('item')
        sumator.add(1.7)
        expect(sumator.sumNums()).to.be.equal(2.8)
    })

    it("sumNotOnlyNumbersInArr", function () {
        let sumator = new Sumator()
        sumator.add(1)
        sumator.add(1)
        sumator.add('item')
        expect(sumator.sumNums()).to.be.equal(2)
    })

    it("sumNotNumbersInArr", function () {
        let sumator = new Sumator()
        sumator.add('item')
        sumator.add('item')
        expect(sumator.sumNums()).to.be.equal(0)
    })

    it("removeByFilterOnlyNumbers", function () {
        let sumator = new Sumator()
        sumator.add(1)
        sumator.add(2)
        sumator.add(3)
        sumator.removeByFilter((x) => {
            if(x > 2)
                return x
        })
        expect(sumator.toString()).to.be.equal('1, 2')
    })

    it("removeByFilterNotOnlyNumbers", function () {
        let sumator = new Sumator()
        sumator.add(1)
        sumator.add(2)
        sumator.add(3)
        sumator.add('item')
        sumator.removeByFilter((x) => {
            if(typeof x !== 'number')
                return x
        })
        expect(sumator.toString()).to.be.equal('1, 2, 3')
    })
})
