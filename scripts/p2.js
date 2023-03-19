/**
 * The purpose of this file is to provide functionality for the grid and the entire webpage
 *
 * @author Basel Allam, Josh Cole
 */

/*Global variables*/

//An array to hold the audio
const audioList = [
  "./audios/aqq.wav",
  "./audios/eliey.wav",
  "./audios/kesalk.wav",
  "./audios/kil.wav",
  "./audios/ltu.wav",
  "./audios/mijisi.wav",
  "./audios/nin.wav",
  "./audios/teluisi.wav",
  "./audios/wiktm.wav",
];

//An array to hold the images
const imageList = [
  "./images/aqqText.jpg",
  "./images/elieyText.jpg",
  "./images/kesalkText.jpg",
  "./images/kilText.jpg",
  "./images/ltuText.jpg",
  "./images/mijisiText.jpg",
  "./images/ninText.jpg",
  "./images/teluisiText.jpg",
  "./images/wiktmText.jpg",
];

//A value to link the audio button with the word on screen so it plays the correct audio
let startQuestion = Math.floor(Math.random() * 9);

const answer = Math.random() * 9;

/**
 * A function to play the audio for the displayed word
 *
 * @author Basel
 */
function playAudio() {
  var audio = new Audio();
  audio.src = audioList[startQuestion];
  audio.play();
}

/**
 * A function to load the starting word
 *
 * @author Basel
 */
function loadStartQuestion() {
  var loadImage = imageList[startQuestion];
  $(".question").append("<img src= " + loadImage + ' alt="">');
}

/**
 * The purpose of this function is to store the id of the element being
 * dragged in a common storage area, under the key "text".
 *
 * This function runs as soon as an element has begun to be dragged.
 *
 * "ev" is the event object loaded with "drag" event info
 *
 * @author Josh Cole
 */
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

/**
 * The purpose of this function is to suspend the default behaviour so that
 * instead the dragged element can potentially end up with a new position.
 *
 * This function runs when a dragged element is over a potential target.
 *
 * "ev" is the event object loaded with "dragover" event info
 *
 * "imageNum" is the particular data passed as a fix for the issue of
 * having 2 different id's contained within the "event" object at
 * different times. The function also hides the image the bear is being
 *  gragged over top of.
 *
 * @author Josh Cole
 */
function allowDrop(ev, imageNum) {
  ev.preventDefault();

  /* Watching this output indicates how a potential bug can occur in your
       code, if you don't handle the possibility that the id from the div tag
       as well as the img tag, can be present via the "event" object */
  console.log(ev.target.id);

  /* One possible fix is to simply pass a separate argument with the
       necessary value */
  console.log("imageNum=" + imageNum);

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
 * The purpose of this function is: to allow a dropped element to acquire a
 * new position; retrieve the id of the dropped element using the key "text";
 * and to set the new position of the dropped element; respectively. The function
 *
 * "ev" is the event object loaded with "drop" event info
 *
 * @author Josh Cole
 */
function drop(ev, imageNum, cellNum) {
  ev.preventDefault();

  // hide current image in the cell the bear is being dropped in
  $("#image" + imageNum).hide();

  // contains the id of the element that was being dragged
  let data = ev.dataTransfer.getData("text");

  // append and display bear image into cell
  cellNum.appendChild(document.getElementById(data));

  // Make the bear image undraggable after it has been dropped
  bear.setAttribute("draggable", false);

  // call check answer funtion to see determine if the bear was dropped in the correct cell
  checkAnswer(imageNum);
}

/**
 * this function displays the screen with images
 * and text for the correct answer
 *
 * @author Josh Cole
 */
function correct() {
  $("#star1").show();
  $("#star2").show();
  $("#correctText").show();
}

/**
 * this function displays the screen with images
 * and text for the incorrect answer
 *
 * @author Josh Cole
 */
function incorrect() {
  $("#sun1").show();
  $("#sun2").show();
  $("#incorrectText").show();
}

/**
 * funtion to check the answer, and display either the
 * correct or incorrect screens by calling their functions
 *
 * @author Josh Cole
 */
function checkAnswer(imageNum) {
  if (answer == imageNum) {
    correct();
  } else {
    incorrect();
  }
}
