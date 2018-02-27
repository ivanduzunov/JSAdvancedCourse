function solve(input) {
    let commandExecutor = (function () {
        let arr = []

        function create(tokens) {
            let obj = undefined
            if (tokens.length > 1) {
                let fatherName = tokens[2]
                obj = Object.create(arr.filter(i => i.name === fatherName)[0])
                obj.name = tokens[0]
            } else {
                obj = {name: tokens[0]}
            }
            arr.push(obj)
        }

        function set(tokens) {
            let objName = tokens[0]
            let propertyName = tokens[1]
            arr.filter(i => i.name === objName)[0][propertyName] = tokens[2]
        }

        function print(tokens) {
            let obj = arr.filter(i => i.name === tokens[0])[0]
            let result = []
            for (let property in obj) {
                if (property !== 'name') {
                    result.push(`${property}:${obj[property]}`)
                }
            }
            console.log(result.join(', '))
        }

        return {create, set, print}
    }())

    for (let item of input) {
        let tokens = item.split(' ')
        let command = tokens.shift()
        let value = tokens
        commandExecutor[command](value)
    }
}