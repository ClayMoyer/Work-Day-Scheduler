let dailyBlock = $("#timeSlotContainer").children();
let today = dayjs();

$(function () {

  //Add a listener for click events on the save button.
  var textArea = document.querySelectorAll("textArea");
  $('.saveBtn').on('click', saveEvent);

  //save to local storage
  function saveEvent() {
    let itemDescription = $(this).siblings(".description").val();
    let itemTime = $(this).siblings(".hour").text();
    localStorage.setItem(itemTime, itemDescription);
  }
  //retrieve saved user input from localStorage and set the values of the corresponding textarea elements.
  for (let index = 0; index < textArea.length; index++) {
    textArea[index].value = localStorage.getItem(textArea[index].id);
  }

  dailyBlock.each(function() {
    elementHour = Number($(this).attr('id').split('-')[1]);
    presentHour = Number(dayjs().format('H'));

    //code for testing .addClass functionality any time between 5pm and 9am, otherwise they will all be one color. remember to comment out presentHour above
    // var customPresentHour = dayjs().set('hour', 11).set('minute', 0).set('second', 0);
    // presentHour = customPresentHour.hour();

//apply the past, present, or future class to each time block by comparing the id to the current hour.
    if ( presentHour === elementHour ) {
      $(this).addClass("present")
    } else if ( presentHour > elementHour ) {
      $(this).addClass("past");
    } else if ( presentHour < elementHour ) {
      $(this).addClass("future");
    }
  }); 

  $("#currentDay").text(today.format('dddd, MMMM D'))
  });



