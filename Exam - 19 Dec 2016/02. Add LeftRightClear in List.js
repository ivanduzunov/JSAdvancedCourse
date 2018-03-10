function makeList() {
    let data = [];
    return {
        addLeft: function (item) {
            data.unshift(item);
        },
        addRight: function (item) {
            data.push(item);
        },
        clear: function () {
            data = [];
        },
        toString: function () {
            return data.join(", ");
        }
    };
}


let expect = require('chai').expect

describe("makeList()", function () {

    it("create", function () {
        let list = new makeList()
        expect(list.toString()).to.be.equal("")
    })

    it("should contain all properties", function () {
        let list = new makeList()
        expect(list.addLeft).to.exist
        expect(list.addRight).to.exist
        expect(list.clear).to.exist
        expect(list.toString).to.exist
    });


    it("addLeft", function () {
        let list = new makeList()
        list.addRight(1)
        list.addRight(2)
        list.addLeft(3)
        expect(list.toString()).to.be.equal("3, 1, 2")
    })

    it("addRight", function () {
        let list = new makeList()
        list.addLeft(1)
        list.addLeft(2)
        list.addRight(3)
        expect(list.toString()).to.be.equal("2, 1, 3")
    })

    it("Clear", function () {
        let list = new makeList()
        list.addLeft(1)
        list.addLeft(2)
        list.addRight(3)
        list.clear()
        expect(list.toString()).to.be.equal("")
    })

})