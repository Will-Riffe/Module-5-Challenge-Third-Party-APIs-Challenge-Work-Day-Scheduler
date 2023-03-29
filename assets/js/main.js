// Get the current date and display it at the top of the calendar
var currentDate = moment().format('dddd, MMMM Do, h:mm a');
$("#currentDay").text(currentDate);

// Allows color-coding new classes: past, present, or future
$(".time-block tr").each(function () {
    var currentHour = moment().hours();
    var blockHour = parseInt($(this).attr("id").replace("hour", ""));
  
    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
  

// Save the text for each event to local storage when the save button is clicked
$(".saveBtn").on("click", function () {
  var blockId = $(this).closest("tr").attr("id");
  var blockText = $("#" + blockId + " input").val();

  localStorage.setItem(blockId, blockText);
});

// Load any saved events from local storage and display them in the time blocks
$(document).ready(function () {
  $("tr").each(function () {
    var blockId = $(this).attr("id");
    var blockText = localStorage.getItem(blockId);

    $(this).find("input").val(blockText);
  });
});
