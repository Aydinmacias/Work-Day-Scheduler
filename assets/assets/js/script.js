var planner = document.querySelector(".container");
var save = document.querySelectorAll(".save-btn");

var savedItems = document.getElementsByClassName(".input");


var today = moment();
$("#currentDay").text(today.format("MMMM Do YYYY, h:mm a"));

//Parse JSON
function getTask(){
    console.log("TO");
    JSON.parse(localStorage.getItem("hourly tasks"))
}
// save to local storage
$(".save-btn").on("click", function(){
    var textValue= $(this).parent().siblings("td").children("input").val()
    console.log(textValue)
    var hour= $(this).parent().parent().attr("id")
    localStorage.setItem(hour, textValue)
})

$(".input").each(function(){
    var hour = $(this).parent().parent().attr("id")
    var storedText = localStorage.getItem(hour)
    $(this).val(storedText)
})

// a function that rotates through the time blocks, compares to moment.js time 
// and then colors the blocks accordingly 
// use jquery to dynamically change color of blocks
function colorChanger() {
    // momentHour is the current time 
    // hourOfBlock is the hour on the physical time block that is on the app
    var momentHour = moment().hours();
    $('.block').each(function() {
        var hourOfBlock = parseInt($(this).attr('id')) 
        if(hourOfBlock < momentHour) {
            $(this).addClass('past')
        } else if (hourOfBlock === momentHour) {
            $(this).removeClass('past')
            $(this).addClass('present')
        }else {
            $(this).removeClass('past')
            $(this).removeClass('present')
            $(this).addClass('future')

        }

    })
}
colorChanger();

var updateInterval = setInterval(colorChanger, 15000);

// how we retreive the information
$('#idofblock1 .classofinput').val(localStorage.getItem('idofblock'))
$('#idofblock2 .classofinput').val(localStorage.getItem('idofblock'))
//function saveTask(){
    //console.log("save button press")
    //JSON.stringify(localStorage.setItem("hourly task", savedItems));
    //getTask();


//save.forEach(element =>{
   // element.addEventListener("click",saveTask)
//});


