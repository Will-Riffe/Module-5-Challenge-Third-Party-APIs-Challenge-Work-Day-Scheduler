$(document).ready(function () {
    // Get the current day and format it as "dddd, MMMM Do YYYY"
    var currentDay = moment().format("dddd, MMMM Do YYYY");
    // Set the text of the h2 element with id "currentDay" to the current day
    $("#currentDay").text(currentDay);
});