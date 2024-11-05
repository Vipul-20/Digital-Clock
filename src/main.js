// == Class Target
var hoursContainer = document.querySelector(".hours");
var minutesContainer = document.querySelector(".minutes");
var secondsContainer = document.querySelector(".seconds");
// tick(): Yeh function animation ya visual toggle karne ke liye use hota hai, elements ko show ya hide karta hai based on tick-hidden class.
var tickElements = Array.from(document.querySelectorAll(".tick"));

var last = new Date(0);
last.setUTCHours(-1);

var tickState = true;

function updateTime() {
  // now = new Date se current date and time ko get kiya jata hai.
  var now = new Date();

  // last variable jo previous time ko store karta hai, uske hour, minute, aur second ko check kiya jata hai (last.getHours(), last.getMinutes(), last.getSeconds()).
  var lastHours = last.getHours().toString();
  var nowHours = now.getHours().toString();

  // last,now ,updateContainer (Update the display)
  if (lastHours !== nowHours) {
    updateContainer(hoursContainer, nowHours);
  }

  // Agar hour, minute, ya second dono alag hain, toh respective container (hoursContainer, minutesContainer, secondsContainer) ko update kiya jata hai.
  var lastMinutes = last.getMinutes().toString();
  var nowMinutes = now.getMinutes().toString();
  if (lastMinutes !== nowMinutes) {
    updateContainer(minutesContainer, nowMinutes);
  }

  var lastSeconds = last.getSeconds().toString();
  var nowSeconds = now.getSeconds().toString();
  if (lastSeconds !== nowSeconds) {
    //tick()
    updateContainer(secondsContainer, nowSeconds);
  }

  last = now;
}

function tick() {
    // tickElements array (ya NodeList) ke har element par loop chala kar unki CSS class tick-hidden ko toggle karta hai.
  tickElements.forEach((t) => t.classList.toggle("tick-hidden"));
}

function updateContainer(container, newTime) {
    // newTime: newTime.split('') se time ko ek array mein convert kiya jata hai. For example, agar newTime "12" hai, toh time array ban jayega: ["1", "2"],
  var time = newTime.split("");

  if (time.length === 1) {
    time.unshift("0");
  }

  var first = container.firstElementChild;
  if (first.lastElementChild.textContent !== time[0]) {
    updateNumber(first, time[0]);
  }

  var last = container.lastElementChild;
  if (last.lastElementChild.textContent !== time[1]) {
    updateNumber(last, time[1]);
  }
}
