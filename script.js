// Step 1: How do I get current Date and Time? (Moment.js --> Import CDN)

var timeNow = moment().format("LLL");
$("#currentDay").append(timeNow);



// Step 3: How do I create a for loop going through 1 hour time slots starting at 9 am - 5pm? 
var num = [9, 10, 11, 12, 1, 2, 3, 4, 5]

for (let index = 0; index < num.length; index++) {
    var row = $("<div class='row'>");

    if (num[index] >= 9 && num[index] <= 12) {
        var columnOne = $("<div class='col-sm-2 hour'>").append(num[index], "AM");

    }
    else {
        var columnOne = $("<div class='col-sm-2 hour'>").append(num[index], "PM");

    }
    var columnTwo = $("<div class='col-sm-8 mb-n4'>").append("<textarea class='form-control'>");
    var columnThree = $("<div class='col-sm-2'>").append("<button class='saveBtn'>Save")

    row.append(columnOne, columnTwo, columnThree);
    $("#scheduleDiv").append(row);

    tellTime();
}


// Step 4: How to make gray (past time = anyting prior your current time), red (current time), green (future time = anything after current time) colors for schedule? 


function tellTime() {

    if (moment(num).isBefore(timeNow, "hour")) {
        var columnTwo = $("<div class='col-sm-8 mx-auto mt-n5 row'>").append("<textarea class='form-control past'>Too Late");
    } else if (moment(num).isSame(timeNow, "hour")) {
        var columnTwo = $("<div class='col-sm-8 mx-auto mt-n5 row'>").append("<textarea class='form-control present'>Right on Time");
    } else {
        var columnTwo = $("<div class='col-sm-8 mx-auto mt-n5 row'>").append("<textarea class='form-control future'>Coming Soon");
    }
 
    row.append(columnTwo);

}

// Step 8: Third Column: Create a element (div) that's clickable and stores second column in local storage.

var savedTodo = document.querySelector(".row")

$(".saveBtn").click(function(event){
    event.preventDefault();

    var todo = savedTodo.value.trim();

    if (todo === "") {
        displayMessage("error", "Entry cannot be blank");
    } else {
        displayMessage("Success", "Entry Recorded");
        localStorage.setItem("todo", todo);
        
        var lastTodo = localStorage.getItem("todo");
        todo.textContent = lastTodo.savedTodo;

    }

})
