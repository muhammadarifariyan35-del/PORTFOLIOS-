let width = window.innerWidth;
let height = window.innerHeight;

console.log(`width ${width}px height ${height}px`);

console.log(screen.width);
console.log(screen.height);
console.log(screen.availWidth);
console.log(screen.availHeight);

console.log(window.location);
console.log(location.protocol);
console.log(location.hostname);
console.log(location.port);
console.log(location.pathname);

function goBack() {
  history.goBack();
}

function goForward() {
  history.forward();
}

if (navigator.onLine) {
  console.log("User onlie ache.");
} else {
  console.log("user online nai.");
}

console.log(navigator.userAgent);
console.log(navigator.language);
console.log(navigator.cookieEnabled);

navigator.geolocation.getCurrentPosition(function (position) {
  console.log("অক্ষাংশ (Latitude): " + position.coords.latitude);
  console.log("দ্রাঘিমাংশ (Longitude): " + position.coords.longitude);
});

// if(confirm("apni ki post delete korte chan.")){
//   console.log("kaj hoye geche")
// }else{
// console.log("batil kora hoyeche.")
// }

// let fname = prompt("apnar name lekhon", "")

// if(fname !== null && fname !== ""){
//   console.log("Hello" + " " + fname)
// }

document.cookie = "username=Arif Ariyan";

document.cookie =
  "username=arif ariyan; expires=thu, 18 Dec 2030 12:00:00 UTC; path=/";

console.log(document.cookie)  