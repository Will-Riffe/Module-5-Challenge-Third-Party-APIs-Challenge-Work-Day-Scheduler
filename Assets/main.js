$(document).ready(function() {
    // Get the current day and format it as "dddd, MMMM Do YYYY"
    var currentDay = moment().format("dddd, MMMM Do YYYY");
    // Set the text of the h2 element with id "currentDay" to the current day
    $("#currentDay").text(currentDay);
  
    // Define an array of hours
    var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  
    // Initialize variables to keep track of the start and end times of selected blocks
    var selectedStartHour = null;
    var selectedEndHour = null;
  
    // Add the hour blocks to the planner
    for (var i = 0; i < hours.length; i++) {
      var hourBlock = $('<tr>').addClass('hour-block').attr('data-hour', i).append($('<td>').text(hours[i]));
      $('.time-block').append(hourBlock);
    }
  
    // Add a click event listener to each hour block to toggle its selected state and show the event input field
    $('.hour-block').click(function() {
      var td = $(this).find('td');
      var input = td.next('input');
      var saveBtn = td.next('.save-btn');
      if (input.length === 0) {
        saveBtn = $('<button class="save-btn">Save</button>');
        td.after(saveBtn);
        input = $('<input type="text" class="description">').val('');
        td.after(input);
      }
    });
  
    // Save the text for each event when the save button is clicked
    $(document).on("click", ".save-btn", function() {
      var hour = $(this).parent().attr("data-hour");
      var description = $(this).siblings("input").val();
  
      localStorage.setItem(hour, description);
    });
  
    // Load the saved events from local storage and set the color of each hour block based on whether it is in the past, present, or future
    $(".hour-block").each(function() {
      var hour = $(this).attr("data-hour");
      var description = localStorage.getItem(hour);
  
      if (description !== null) {
        $(this).find(".description").val(description);
      }
  
      var currentHour = moment().hour();
  
      if (hour < currentHour) {
        $(this).addClass("past");
      } else if (hour > currentHour) {
        $(this).addClass("future");
      } else {
        $(this).addClass("present");
      }
    });
  });
  