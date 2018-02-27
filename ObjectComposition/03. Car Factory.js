function solve(requirement) {
    let result = {}
    const engines = [
        {power: 90, volume: 1800},
        {power: 120, volume: 2400},
        {power: 200, volume: 3500}]
    result.model = requirement.model
    for (let type of engines) {
        if (type.power >= requirement.power) {
            result.engine = {
                power: type.power,
                volume: type.volume
            }
            break
        }
    }
    result.carriage = {
        type: requirement.carriage,
        color: requirement.color
    }
    let requiredWheels = requirement.wheelsize
    let wheelSize = requiredWheels % 2 === 0 ? requiredWheels - 1 : requiredWheels
    result.wheels = [wheelSize, wheelSize, wheelSize, wheelSize]
    return result
}