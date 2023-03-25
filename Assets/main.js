// Wait for the page to fully load before running the JavaScript
$(document).ready(function () {
    // Get the current day and format it as "dddd, MMMM Do YYYY"
    var currentDay = moment().format("dddd, MMMM Do YYYY");
    // Set the text of the h2 element with id "currentDay" to the current day
    $("#currentDay").text(currentDay);

    // Define an array of hours
    var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

    for (var i = 0; i < hours.length; i++) {
        var hourBlock = $('<tr>').addClass('hour-block').append($('<td>').text(hours[i]));
        $('.time-block').append(hourBlock);
      }
      
      // Add a click event listener to each time block to toggle its selected state
      $('.hour-block').click(function () {
        var td = $(this).find('td');
        if (!td.find('input').length) {
          var input = $('<input type="text">').val(td.text());
          td.after(input);
        }
      });
      


});
