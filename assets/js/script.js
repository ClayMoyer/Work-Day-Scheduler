let dailyBlock = $("#timeSlotContainer").children();
let today = dayjs();
// let currentDate = $("#currentDay")

$(function () {
  //Add a listener for click events on the save button.
  var textArea = document.querySelectorAll("textArea");
  $('.saveBtn').on('click', saveEvent);

  function saveEvent() {
    let itemDescription = $(this).siblings(".description").val();
    let itemTime = $(this).siblings(".hour").text();
    localStorage.setItem(itemTime, itemDescription);
  }
  //Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.
  for (let index = 0; index < textArea.length; index++) {
    textArea[index].value = localStorage.getItem(textArea[index].id);
  }

  dailyBlock.each(function() {
    elementHour = Number($(this).attr('id').split('-')[1]);
    presentHour = Number(today.format('H'));
    console.log("elementHour:", elementHour);
    console.log("presentHour:", presentHour);
}); 
// TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.
    if ( presentHour === elementHour ) {
      $(this).addClass('present')
    } else if ( presentHour > elementHour ) {
      $(this).addClass('past');
    } else if ( presentHour < elementHour ) {
      $(this).addClass('future');
    }

  $("#currentDay").text(today.format('dddd, MMMM D'))
  });



