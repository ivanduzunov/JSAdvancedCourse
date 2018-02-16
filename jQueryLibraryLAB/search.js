function search() {
    let text = $('#searchText').val()

    let matches = 0

    $('#towns li').each((index, item) => {
        if(item.textContent.includes(text)) {
            $(item).css("font-weight", "bold")
            matches++
        }else{
            $(item).css("font-weight", "")
        }
    })

    $("#result").text(matches + " matches found.")
}