//! লেভেল-১ (JS Timers: Delayed Notification)

function delayedLog(message, delayTime) {
  setTimeout(() => {
    console.log(message);
  }, delayTime);
}
delayedLog("Welcome to JavaScript Timer", 100);

//! লেভেল-২ (JS Timers: Countdown Timer)

function startCountDown(seconds) {
  let count = seconds;
  const timerId = setInterval(() => {
    if (count > 0) {
      console.log(count);
      count--;
    } else {
        console.log("Time is up");
        clearInterval(timerId);
    }
  }, 500);
}
startCountDown(10);

//! লেভেল-৩ (JS Timers + Closure: Stopwatch with Controls)

