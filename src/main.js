// == Class Target  
var hoursContainer = document.querySelector('.hours')
var minutesContainer = document.querySelector('.minutes')
var secondsContainer = document.querySelector('.seconds')
var tickElements = Array.from(document.querySelectorAll('.tick'))




function updateTime() {
    // now = new Date se current date and time ko get kiya jata hai.
    var now = new Date

    // last variable jo previous time ko store karta hai, uske hour, minute, aur second ko check kiya jata hai (last.getHours(), last.getMinutes(), last.getSeconds()).
    var lastHours = last.getHours().toString()
    var nowHours = now.getHours().toString()

    // last,now ,updateContainer (Update the display)
    if (lastHours !== nowHours) {
        updateContainer(hoursContainer, nowHours)
    }

    // Agar hour, minute, ya second dono alag hain, toh respective container (hoursContainer, minutesContainer, secondsContainer) ko update kiya jata hai.
    var lastMinutes = last.getMinutes().toString()
    var nowMinutes = now.getMinutes().toString()
    if (lastMinutes !== nowMinutes) {
        updateContainer(minutesContainer, nowMinutes)
    }

    var lastSeconds = last.getSeconds().toString()
    var nowSeconds = now.getSeconds().toString()
    if (lastSeconds !== nowSeconds) {
        //tick()
        updateContainer(secondsContainer, nowSeconds)
    }

    last = now
}