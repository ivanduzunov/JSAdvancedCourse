function createBook(selector, name, author, isbn) {
    let fragment = document.createDocumentFragment()
    let id = 1
    let container = $(selector)

    let div = $('<div></div>')
    let titleParagraph = $('<p></p>')
    let authorParagraph = $('<p></p>')
    let isbnParagraph = $('<p></p>')
    let selectBtn = $('<button>Select</button>')
    let deselecttBtn = $('<button>Deselect</button>')

    div.attr('id', `book${id}`)
    div.css('border', 'medium none')
    titleParagraph.addClass('title')
    authorParagraph.addClass('author')
    isbnParagraph.addClass('isbn')

    titleParagraph.text(name)
    authorParagraph.text(author)
    isbnParagraph.text(isbn)

    selectBtn.on('click', function () {

    })

    titleParagraph.appendTo(div)
    authorParagraph.appendTo(div)
    isbnParagraph.appendTo(div)
    selectBtn.appendTo(div)
    deselecttBtn.appendTo(div)
    div.appendTo(container)


    container.append(fragment)


}
