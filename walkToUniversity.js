function stepsToUniversity(steps, footLength, kmPerHour){
    let distance = footLength * steps;
    let restTime = Math.floor(distance / 500)
    let meterPerSecond = kmPerHour * 1000 / 3600
    let totalTime = distance / meterPerSecond
    totalTime += restTime * 60
    let hour = Math.floor(totalTime /3600)
    let min = Math.floor(totalTime / 60)
    let sec = Math.round(totalTime % 60)
    hour < 10 ? hour = '0' + hour: hour = hour
    sec < 10 ? sec = '0' + sec: sec = sec
    min < 10 ? min = '0' + min: min = min
    console.log(`${hour}:${min}:${sec}`)

}
stepsToUniversity(4000, 0.60, 5)
