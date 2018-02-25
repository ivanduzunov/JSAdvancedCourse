function sortArray(inputArray, sortMethod) {

    let ascendingSorter = function (a, b) {
        return a - b
    }

    let descendingSorter = function (a, b) {
        return b - a
    }

    let sorters = {
        'asc': ascendingSorter,
        'desc': descendingSorter
    }

    return inputArray.sort(sorters[sortMethod])
}