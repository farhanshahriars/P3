/**
 * This function stores the id of the element thats being dragged under "text"
 * in a common storage area.
 *
 * When an element starts to be draged, this funcion is immediately called.
 * "ev" is the event object loaded with "drag" event info.
 *
 * @author Josh - created and wrote this funtion
 */
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

/**
 * This function runs when dragged element is hovering over a target, and
 * prevents the default action from happening so that the dragged element can
 * be dropped into a new postition. The function also hides the image the bear
 * is being dragged over top of.
 *
 * "ev" is the event object loaded with "dragover" event info
 *
 * "imageNum" is the data passed to the function used to hide
 * the image (target) that the dragged element is hovering over.
 * this is done by using the targets id (imageNum) to hide the image.
 *
 * @author Josh - created and wrote this funtion
 */
function allowDrop(ev, imageNum) {
  // stop the default action of an element from happening
  ev.preventDefault();

  // show all images except the one the bear is being dragged over
  $("#image1").show();
  $("#image2").show();
  $("#image3").show();
  $("#image4").show();
  $("#image5").show();
  $("#image6").show();
  $("#image7").show();
  $("#image8").show();
  $("#image9").show();
  $("#image" + imageNum).hide();
}

/**
 * The purpose of this function is to allow a dropped element to acquire a
 * new position, the previous element has already been hidden by allowDrop().
 * retrieve the id of the dropped element using the key "text";
 * and to set the new position of the dropped element; respectively.
 *
 *
 * "ev" is the event object loaded with "drop" event info
 *
 * "imageNum" is the data passed to the function used to check
 * if the bear was dropped on the correct image by calling checkAnswer
 *
 * "cellNum" is used to append the bear image (data) to the correct cell
 *
 * @author Josh - created and wrote this function
 */
function drop(ev, imageNum, cellNum) {
  // stop the default action of an element from happening
  ev.preventDefault();

  //Contains the id of the element that was being dragged
  let data = ev.dataTransfer.getData("text");

  // set dropOn to the image number dropped on
  dropOn = imageNum;

  //Append and display bear image into cell
  cellNum.appendChild(document.getElementById(data));

  //Make the bear image undraggable after it has been dropped
  bear.setAttribute("draggable", false);

  //Call check answer funtion to see determine if the bear was dropped in the correct cell
  checkAnswer(imageNum);
}

/**
 * This function displays the screen with images
 * and text for the correct answer
 *
 * @author Josh - displaying stars and correctText
 *         Bhaumik - handling restart, vol and question
 */
function correct() {
  $("#star1").show();
  $("#star2").show();
  $("#correctText").show();
  $("#restart").show();
  $("#vol").hide();
  $("#question").hide();
}

/**
 * This function displays the screen with images
 * and text for the incorrect answer
 *
 * @author Josh - displaying suns and incorrectText
 *         Bhaumik - handling restart, vol and question
 */
function incorrect() {
  $("#sun1").show();
  $("#sun2").show();
  $("#incorrectText").show();
  $("#restart").show();
  $("#vol").hide();
  $("#question").hide();
}

/**
 * Funtion to check the answer, and display either the
 * correct or incorrect screens by calling their functions
 *
 * @author Josh - created and wrote function
 */
function checkAnswer(imageNum) {
  // if the imageNum = the answer, it is correct, else incorrect
  if (answer == imageNum - 1) {
    correct();
  } else {
    incorrect();
  }
}
