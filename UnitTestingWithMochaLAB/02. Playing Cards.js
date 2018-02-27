function makeCard(card, suit) {
    const validCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    const validSuits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663 '
    }

    if (validCards.indexOf(card) < 0 || !validSuits.hasOwnProperty(suit)) {
        throw Error('Invalid card!')
    } else {
        return `${card.toUpperCase()}${validSuits[suit]}`
    }
}