var dayClock = document.getElementById('.container');
var today = moment();
$('#currentDay').text(today.format("MMMM Do YYYY, h:mm a"));

var calenderSlots = null;



function calenderHours(){
    var slots = [];
    new Array(24).fill().forEach((acc, index)=>{
        slots.push(moment( {hour: index} ).format('h:mm A'));
    })
    calenderSlots=slots;
    return calenderSlots;
}
calenderHours();
calenderTimes();
function calenderTimes(){

    for (i=0; i<= calenderSlots.length; i++){
        var createSlotTime = document.createElement('p');
        var createSlotText = document.createElement('td');
        createSlotTime.setAttribute('id','p'+i);
        createSlotTime.textContent = calenderSlots[i];
        $('#row'+ i).text(calenderSlots[i]);
    }
}
console.log(calenderSlots);