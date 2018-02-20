function domSearch(selector, isCaseSensitive) {
    //todo: Search function does't work properly, have to add delete function
    let container = $(selector)
    let addElementDiv = $('<div>')
    let searchElementsDiv = $('<div>')
    let resultsDiv = $('<div>')

    container.addClass('items-control')
    addElementDiv.addClass('add-controls')
    searchElementsDiv.addClass('search-controls')
    resultsDiv.addClass('result-controls')

    //Add DIV
    let addLabel = $('<label>')
    addLabel.text('Enter text: ')
    let addInput = $('<input>')
    addLabel.append(addInput)
    let addLink = $('<a>')
    addLink.addClass('button')
    addLink.attr('href', '#')
    addLink.css('display', 'inline-block')
    addLink.text('Add')
    addElementDiv.append(addLabel)
    addElementDiv.append(addLink)

    //Search DIV
    let searchLabel = $('<label>')
    searchLabel.text('Search: ')
    let searchInput = $('<input>')
    searchLabel.append(searchInput)
    searchElementsDiv.append(searchLabel)

    //Results DIV
    let ul = $('<ul>')
    ul.addClass('items-list')
    resultsDiv.append(ul)

    container.append(addElementDiv)
    container.append(searchElementsDiv)
    container.append(resultsDiv)

    let searchText = searchInput.text()
    let elements = $('#list-item').children

    for (let item of elements) {
        let text = item.strong.text()
        console.log(text)
        if (!text.contains(searchText)) {
            item.css('display', 'none')
        }
    }

    addLink.on('click', function (event) {
        event.preventDefault()
        let elementToAdd = addInput.val()
        let li = $('<li>')
        li.addClass('list-item')
        li.css('display', '')
        let itemLink = $('<a>')
        itemLink.attr('href', '#')
        itemLink.addClass('button')
        itemLink.text('X')
        let strongElement = $('<strong>')
        strongElement.text(elementToAdd)
        li.append(itemLink)
        li.append(strongElement)
        ul.append(li)
    })


}
