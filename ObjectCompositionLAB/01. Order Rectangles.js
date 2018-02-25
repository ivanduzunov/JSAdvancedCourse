function solve(input) {
    let objs = []
    for (let item of input) {
        let width = Number(item[0])
        let height = Number(item[1])

        let obj = {
            width: width,
            height: height,
            area: function () {
                return obj.height * obj.width
            },
            compareTo: function (other) {
                let result = other.area() - obj.area()
                return result || (other.width - obj.width)
            }
        }

        objs.push(obj)
    }
    return (objs.sort((a, b) => a.compareTo(b)))
}