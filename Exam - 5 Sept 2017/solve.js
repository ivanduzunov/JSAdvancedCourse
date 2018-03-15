function sort(colIndex, descending) {
    let body = $('tbody')
    let rows = body.find('tr').toArray()

    if (colIndex === 0) {
        rows.sort((a, b) => {
            a = a.children[0].textContent
            b = b.children[0].textContent

            return a.localeCompare(b)
        })
    } else {
        rows.sort((a, b) => {
            a = Number(a.children[1].textContent)
            b = Number(b.children[1].textContent)

            return a - b
        })
    }

    if (descending)
        rows.reverse()

    body.append(rows)
}