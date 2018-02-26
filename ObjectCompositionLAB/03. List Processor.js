function solve(arr) {
    let commandExecutor = (function () {
        let arr = []
        function add(str) {
            arr.push(str)
        }
        function remove(str) {
            arr = arr.filter(e => e !== str)
        }
        function print() {
            console.log(arr.join(','))
        }
        return {add, remove, print}
    }())

    for (let item of arr){
        let [command, value] = item.split(' ')
        commandExecutor[command](value)
    }
}