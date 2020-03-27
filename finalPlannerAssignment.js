var row = 1;
var tBodyId = "tBody";

var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);
// This Displays the details
function displayDetails() {
    var timeOfDay = document.getElementById("txtValue").value;
    var dayOfTheWeek = document.getElementById("dayOfTheWeek").value;
    var  activity = document.getElementById("activities").value;

    if(!timeOfDay ||!dayOfTheWeek || !activities) {
        alert("please fill in all the boxes");
        return;
        
    }

var display = document.getElementById("display");

var newRow = display.insertRow(row);

var cell1 = newRow.insertCell(0);
var cell2 = newRow.insertCell(1);
var cell3 = newRow.insertCell(2);

cell1.innerHTML = dayOfTheWeek;
cell2.innerHTML = activity;
cell3.innerHTML = timeOfDay;

row++;
}
//clears the days section
$(document).ready(function(){
    $("#btnClear").click(function(){
        $("#dayOfTheWeek",).val("");
        $("#activities").val("");
    }
    );

    $("#btnClear2").click(function(){
        $("#txtValue").val("");
    
    while(row > 1){
          display.deleteRow(1);
          row--;
      }
    }
    );
}
);
//this adds the selected time to the input field
function time(){
    var d = document.getElementById("time");
    var displaytext = d.options[d.selectedIndex].text;
    document.getElementById("txtValue").value = displaytext
};

//$(document).ready(function(){
   // $("#btnclear2").click(function(){
        //$(".class").removeRow("");
   // })
//})