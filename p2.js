/**
 * The purpose of this file is to provide functionality for the grid and the entire webpage
 * 
 * @author Basel
 */

/*Global variables*/

//An array to hold the audio
const audioList = ["./audios/aqq.wav", "./audios/eliey.wav", "./audios/kesalk.wav", "./audios/kil.wav", "./audios/ltu.wav", "./audios/mijisi.wav", "./audios/nin.wav", "./audios/teluisi.wav", "./audios/wiktm.wav"];

//An array to hold the images
const imageList = ["./images/aqqText.jpg", "./images/elieyText.jpg", "./images/kesalkText.jpg", "./images/kilText.jpg", "./images/ltuText.jpg", "./images/mijisiText.jpg", "./images/ninText.jpg", "./images/teluisiText.jpg", "./images/wiktmText.jpg"];

//A value to link the audio button with the word on screen so it plays the correct audio
let startQuestion = Math.floor(Math.random() * 3);

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
    $(".question").append(
        "<img src= " + loadImage + ' alt="">'
      );
}
