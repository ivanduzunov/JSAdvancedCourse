class result {
    constructor(nickName) {
        this.nickName = nickName
        this.scores = []
    }

    addScore(score) {
        if(!isNaN(score) && score !== null){
          this.scores.push(score)
        }

        return this;
    }

    get scoreCount() {
        return this.scores.length
    }

    get highestScore() {
        if (this.scores.length === 0)
            return undefined

        return Math.max(...this.scores)
    }

    get topFiveScore() {
        let endIndex = this.scores.length <= 5 ? this.scores.length - 1 : 4
        return this.scores.sort(function (a, b) {
            return b - a
        }).slice(0, endIndex + 1)
    }

    toString() {
        let finalScores = this.scores.sort(function (a, b) {
            return b - a
        })
        return `${this.nickName}: [${finalScores.join(',')}]`
    }
}

let expect = require('chai').expect

describe("Result", function () {

    it("create", function () {
        let p = new result('Trotro');

        p.addScore('Pesho');
        expect(p.toString()).to.equal('Trotro: []','You should add only valid numbers!');
        expect(p.highestScore).to.equal(undefined, 'Invalid high score!');
        expect(p.topFiveScore.length).to.equal(0, 'Invalid top five score!');
        expect(p.scoreCount).to.equal(0, 'Invalid score count!');

        p.addScore('123');
        expect(p.toString()).to.equal('Trotro: [123]','You should add only valid numbers!');
        expect(p.highestScore).to.equal(123, 'Invalid high score!');
        expect(p.topFiveScore[0]).to.equal(123, 'Invalid top five score!');
        expect(p.scoreCount).to.equal(1, 'Invalid score count!');
    })


})