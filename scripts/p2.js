/**
 * Purpose: This file is to provides functionality for the grid and the entire webpage
 *
 * Author(s) / Work Done: Basel Allam - Some global variables & gameplay functions
 *                        Josh Cole - Drag and drop functionality along with some global variables and display functions
 *                        Zeba Syed - Drag and drop functionality
 *                        Bhaumik Vyas - Restart button functionality
 *                        Philip Jones - Gameplay loop function
 * @author Basel Allam, Josh Cole, Philip Jones, Zeba Syed, Bhaumik Vyas
 */

/*Global variables*/

//An array to hold the audio
const audioList = [
  "./audios/wiktm.wav",
  "./audios/teluisi.wav",
  "./audios/nin.wav",
  "./audios/mijisi.wav",
  "./audios/ltu.wav",
  "./audios/kil.wav",
  "./audios/kesalk.wav",
  "./audios/eliey.wav",
  "./audios/aqq.wav",
];

//An array to hold the images
const imageList = [
  "./images/wiktmText.jpg",
  "./images/teluisiText.jpg",
  "./images/ninText.jpg",
  "./images/mijisiText.jpg",
  "./images/ltuText.jpg",
  "./images/kilText.jpg",
  "./images/kesalkText.jpg",
  "./images/elieyText.jpg",
  "./images/aqqText.jpg",
];

/*
A value used to determine what word question is displayed on screen
Allow for the correct audio to be played for the displayed word question
Get rid of the old question when the page is reset
Determine if the user dropped the bear correctly or not
*/
let answer = Math.floor(Math.random() * 9);

/*
A value in string format to store the number of the image the bear is dropped onto
so we could use it to show that image again when the page is reset
*/
let dropOn = "";

/**
 * A funciton used to get a new value for answer when the page is reset
 *
 * @author Basel
 */
function newAnswer() {
  answer = Math.floor(Math.random() * 9);
}

/**
 * A function to play the audio for the displayed word
 *
 * @author Basel
 */
function playAudio() {
  var audio = new Audio();
  audio.src = audioList[answer];
  audio.play();
}

/**
 * A function to load the starting word
 *
 * @author Basel
 */
function loadStartQuestion() {
  var loadImage = imageList[answer];
  $(".question").append("<img src= " + loadImage + ' alt="">');
}

/**
 * A function used to get rid of the old word question when the page is reset
 *
 * @author Basel
 */
function resetQuestion() {
  var loadImage = imageList[answer];
  $(".question").children("img").remove();
}

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
  //Stop the default action of an element from happening
  ev.preventDefault();

  //Show all images except the one the bear is being dragged over
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
  //Stop the default action of an element from happening
  ev.preventDefault();

  //Hide current image in the cell the bear is being dropped in
  $("#image" + imageNum).hide();

  //Contains the id of the element that was being dragged
  let data = ev.dataTransfer.getData("text");

  //Set dropOn to the image number dropped on
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
 * @author Bhaumik - handling restart, vol and question
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
 * @author Bhaumik - handling restart, vol and question
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
  if (answer == imageNum - 1) {
    correct();
  } else {
    incorrect();
  }
}

/**
 * A function to bring back to the page to its original state for the
 * user to answer different question;
 * @author Basel
 */
function startAgain() {
  //Storing the value of the answer before resetting it
  let prevAnswer = answer;

  //Resetting the question with a different answer
  resetQuestion();
  newAnswer();
  loadStartQuestion();

  //Hiding the correct/incorrect screen and showing the question again
  $("#star1").hide();
  $("#star2").hide();
  $("#correctText").hide();
  $("#sun1").hide();
  $("#sun2").hide();
  $("#incorrectText").hide();
  $("#restart").hide();
  $("#vol").show();
  $("#question").show();

  //Removing the bear from where it was dropped
  let place = document.getElementById("bear");
  place.remove();

  //Showing the image that the bear was dropped on
  $("#image" + dropOn).show();

  //Putting the bear back in its original place
  $("#bearcell").append(
    '<img id="bear" src="./images/bear.jpg" alt="" ondragstart="drag(event)" />'
  );
}
