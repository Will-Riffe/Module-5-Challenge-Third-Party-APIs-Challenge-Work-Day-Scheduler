// Get the current date and display it at the top of the calendar
var currentDate = moment().format('dddd, MMMM Do');
$("#currentDay").text(currentDate);

// Color-code the time blocks based on whether they are in the past, present, or future
$(".time-block").each(function () {
  var currentHour = moment().hours();
  var blockHour = parseInt($(this).attr("id"));

  if (blockHour < currentHour) {
    $(this).addClass("past");
  } else if (blockHour === currentHour) {
    $(this).removeClass("past");
    $(this).addClass("present");
  } else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
  }
});

// Save the text for each event to local storage when the save button is clicked
$(".saveBtn").on("click", function () {
  var blockId = $(this).parent().attr("id");
  var blockText = $(this).siblings(".description").val();

  localStorage.setItem(blockId, blockText);
});

// Load any saved events from local storage and display them in the time blocks
$(".time-block").each(function () {
  var blockId = $(this).attr("id");
  var blockText = localStorage.getItem(blockId);

  $(this).children(".description").val(blockText);
});
