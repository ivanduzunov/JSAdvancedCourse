function solve(input) {
    let str = ''

    for (let item of input) {
        let tokens = item.split(' ')
        switch (tokens[0]) {
            case'append':

                str = (function (text, toAdd) {
                    let result = (text + toAdd)
                    return result
                })(str, tokens[1])
                break

            case'removeStart':
                str = (function (text, number) {
                    let result = text.substring(number)
                    return result
                })(str, Number(tokens[1]))
                break

            case'removeEnd':
                str = (function (text, number) {
                    let result = text.substring(0, text.length - number)
                    return result
                })(str, Number(tokens[1]))
                break

            case'print':
                console.log(str)
                break
        }
    }
}

