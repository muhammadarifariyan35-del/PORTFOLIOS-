var ls = window.localStorage

ls.setItem('test', 'testing123')

console.log('locstor--->', ls)

$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

//update the time every 2nd (holy shit i did this with my own google-fu)
var update = function() {
    document.getElementById("currentDay")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);

//this grabs the time-block number and displays it in the console log
$(".time-block").each(function(index, timeBlock){
    console.log(timeBlock.id.slice(5))
})

//this grabs the time-block number for use later...
var intager = $(".time-block").each(function(index, timeBlock){})

//sets up the ability to change styles...
var element9 = document.getElementById("hour-09");
  element9.classList.add("past");
var element10 = document.getElementById("hour-10");
  element10.classList.add("past");
var element11 = document.getElementById("hour-11");
  element11.classList.add("past");
var element12 = document.getElementById("hour-12");
  element12.classList.add("past");
var element13 = document.getElementById("hour-13");
  element13.classList.add("past");
var element14 = document.getElementById("hour-14");
element14.classList.add("past");
var element15 = document.getElementById("hour-15");
  element15.classList.add("past");
var element16 = document.getElementById("hour-16");
  element16.classList.add("past");
var element17 = document.getElementById("hour-17");
  element17.classList.add("past");


//attempt to display time in a single number
//var today = new Date();
//var hour = today.getHours();

var currentHour = moment().hours();
console.log (currentHour);

//some function to list all the divs with id "hour-n"
//getElementById
//var res = str.substring(6);

//this displays the present time in a big number, and i can compare it to present time...
//TODO: must update time every second
//it would be elegant to somehow simplify and associate this with lines 3-8
//console.log(Date.now());
//setTimeout(function(){
//    console.log(Date.now())
//}, 3000)

//this was found on W3...how to convert each time block to a number
//(FROM FRANK)moment js to take Date.now and format it so that it returns the h (hour)


//if (currentHour < intager) {
  //  timeblock.classlist.add()
//}

//intager is the timeblock, currentHour is the present time as a single number
if (intager < currentHour) {
  $(this).addClass("past");
  element9.classList.add("past");
  element10.classList.add("past");
  element11.classList.add("past");
  element12.classList.add("past");
  element13.classList.add("past");
  element14.classList.add("past");
  element15.classList.add("past");
  element16.classList.add("past");
  element17.classList.add("past");
} 
else if (intager === currentHour) {
  $(this).removeClass("past");
  $(this).addClass("present");
  element9.classList.add("present");
  element10.classList.add("present");
  element11.classList.add("present");
  element12.classList.add("present");
  element13.classList.add("present");
  element14.classList.add("present");
  element15.classList.add("present");
  element16.classList.add("present");
  element17.classList.add("present");
} 
else {
  $(this).removeClass("past");
  $(this).removeClass("present");
  $(this).addClass("future");
  element9.classList.add("future");
  element10.classList.add("future");
  element11.classList.add("future");
  element12.classList.add("future");
  element13.classList.add("future");
  element14.classList.add("future");
  element15.classList.add("future");
  element16.classList.add("future");
  element17.classList.add("future");



}


//if (intager < currentHour) {
  //timeblock.classlist.add("past")}
//}
    //timeblock.classList.add('past')
    //we want change it to be green
//    greeting = "Good morning";
//  } else if (time < 20) {
 //   timeblock.classlist.add('present')
//    greeting = "Good day";
//  } else  {

//    greeting = "Good evening";
//  }



//localstorage...
//localStorage.setItem('CalendarTasks', JSON.stringify(//how to format the text entry so it's an array?))
//localStorage.setItem('col-md-10 description', description.innerHTML);

//how to save the entry in column 2? think of this in terms of local storage, take the object out of LS, use JSON.stringify