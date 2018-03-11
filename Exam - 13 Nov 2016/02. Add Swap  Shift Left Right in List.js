function createList() {
    let data = [];
    return {
        add: function (item) {
            data.push(item)
        },
        shiftLeft: function () {
            if (data.length > 1) {
                let first = data.shift();
                data.push(first);
            }
        },
        shiftRight: function () {
            if (data.length > 1) {
                let last = data.pop();
                data.unshift(last);
            }
        },
        swap: function (index1, index2) {
            if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length ||
                !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                index1 === index2) {
                return false;
            }
            let temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
            return true;
        },
        toString: function () {
            return data.join(", ");
        }
    };
}


let expect = require('chai').expect

describe("createList()", function () {

    it("typeList", function () {
        let list = new createList()
        expect(typeof list).to.be.equal("object")
    })

    it("should contain all properties", function () {
        let list = new createList()
        expect(list.add).to.exist
        expect(list.shiftLeft).to.exist
        expect(list.shiftRight).to.exist
        expect(list.swap).to.exist
    })

    it("typeToString", function () {
        let list = new createList()
        expect(typeof list.toString()).to.be.equal("string")
    })

    it("add", function () {
        let list = new createList()
        list.add(1)
        expect(list.toString()).to.be.equal("1")
    })

    it("shiftLeft", function () {
        let list = new createList()
        list.add(1)
        list.add(2)
        list.add(3)
        list.shiftLeft()
        expect(list.toString()).to.be.equal("2, 3, 1")
    })

    it("shiftRight", function () {
        let list = new createList()
        list.add(1)
        list.add(2)
        list.add(3)
        list.shiftRight()
        expect(list.toString()).to.be.equal("3, 1, 2")
    })

    it("swapSuccessfull", function () {
        let list = new createList()
        list.add(1)
        list.add(2)
        list.add(3)
        list.swap(0, 2)
        expect(list.toString()).to.be.equal("3, 2, 1")
    })

    it("swapEqualIndexes", function () {
        let list = new createList()
        list.add(1)
        list.add(2)
        list.add(3)
        list.swap(1, 1)
        expect(list.toString()).to.be.equal("1, 2, 3")
    })

    it("swapIncalidIndexes", function () {
        let list = new createList()
        list.add(1)
        list.add(2)
        list.add(3)
        list.swap(1, 4)
        expect(list.toString()).to.be.equal("1, 2, 3")
    })

    it("swapIncalidIndexes", function () {
        let list = new createList()
        list.add(1)
        list.add(2)
        list.add(3)
        list.swap(-1, 4)
        expect(list.toString()).to.be.equal("1, 2, 3")
    })

    it("toString() empty", function () {
        let list = new createList()
        expect(list.toString()).to.be.equal("")
    })

    it("toString() one element", function () {
        let list = new createList()
        list.add(1)
        expect(list.toString()).to.be.equal("1")
    })

    it("toString() more element", function () {
        let list = new createList()
        list.add(1)
        list.add(2)
        list.add(3)
        expect(list.toString()).to.be.equal("1, 2, 3")
    })

    it('with a multiple elements of different types, should work correctly', function () {
        let list = new createList()
        list.add('Pesho');
        list.add(5);
        let obj = {name: "gosho"};
        list.add(obj);
        expect(list.toString()).to.equal('Pesho, 5, [object Object]');
    })

    it('with a non integer first index, should not change the collection', function () {
        let list = new createList()
        list.add('one');
        list.add('two');
        list.swap([4, 13], 1);
        expect(list.toString()).to.equal("one, two");
    })
})