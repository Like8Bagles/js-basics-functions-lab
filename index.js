// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    return Math.abs(location - 42)
}

function distanceFromHqInFeet(location) {
    return Math.abs(location - 42) * 264
}

function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end) * 264
}

function calculatesFarePrice(start, destination) {
    const distance = Math.abs(start - destination) * 264
    if (distance < 400) {
        return 0
    }
    else if (distance >= 400, distance <= 2000) {
        return .02 * (distance - 400)
    }
    else if (distance > 2000, distance <= 2500) {
        return 25
    }
    else {
        return `cannot travel that far`
    }
}