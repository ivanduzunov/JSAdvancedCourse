function createBook(wrapper, name, author, isbn) {
    let fragment = document.createDocumentFragment()
    let id = 1
    let container = $(wrapper)

    let div = $('<div></div>')
    let titleParagraph = $('<p></p>')
    let authorParagraph = $('<p></p>')
    let isbnParagraph = $('<p></p>')
    let selectBtn = $('<button>Select</button>')
    let deselecttBtn = $('<button>Deselect</button>')

    div.attr('id', `book${id}`)
    div.css('border', '')
    titleParagraph.addClass('title')
    authorParagraph.addClass('author')
    isbnParagraph.addClass('isbn')
    titleParagraph.text(name)
    authorParagraph.text(author)
    isbnParagraph.text(isbn)



    titleParagraph.appendTo(div)
    authorParagraph.appendTo(div)
    isbnParagraph.appendTo(div)
    selectBtn.appendTo(div)
    deselecttBtn.appendTo(div)
    div.appendTo(fragment)


    container.append(fragment)

    selectBtn.on('click', function () {
        div.css('border', '2px solid blue')
    })

    deselecttBtn.on('click', function () {
        div.css('border', '')
    })
}
