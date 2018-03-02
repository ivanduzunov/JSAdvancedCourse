(function () {
    const validCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    const validSuits = {
        'SPADES': '\u2660',
        'HEARTS': '\u2665',
        'DIAMONDS': '\u2666',
        'CLUBS': '\u2663 '
    }

    class Card {
        constructor(face, suit) {
            this.face = face
        }

        set face(f) {
            if (validCards.indexOf(f) < 0) {
                throw new TypeError(`Invalid card face: ${f}`)
            }
            this._face = f
        }

        get face() {
            return this._face
        }

        set suit(suit) {
            if (!Object.keys(validSuits).map(
                    k => validSuits[k]).includes(suit)) {
                throw new TypeError(`Invalid card suit: ${suit}`)
            }
            this._suit = suit
        }

        get suit() {
            return this._suit
        }

        toString() {
            return `${this._face}${this._suit}`
        }
    }
}())