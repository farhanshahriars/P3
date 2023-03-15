/**
 * The purpose of this file is to provide functionality for the grid and the entire webpage
 * 
 * @author Basel
 */

/*Global variables*/

//An array to hold the audio
const audioList = ["./audios/ltu.wav", "./audios/kil.wav", "./audios/aqq.wav"];

//An array to hold the images
const imageList = ["./images/ltuText.jpg", "./images/kilText.jpg", "./images/aqqText.jpg"]

/**
 * A function to play the audio for the displayed word (still need to link the audio and word together)
 * 
 * @author Basel
 */
function playAudio() {
    //var audio = new Audio('./audios/ltu.wav');
    var audio = new Audio();
    audio.src = audioList[Math.floor(Math.random() * 2)];
    audio.play();
}

/**
 * A function to load the starting word (still need to link the audio and word together)
 * 
 * @author Basel
 */
function loadStartQuestion() {
    var loadImage = imageList[Math.floor(Math.random() * 2)];
    console.log(loadImage);
    $(".question").append(
        "<img src= " + loadImage + ' alt="">'
      );
}
