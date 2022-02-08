// Import stylesheets
import './style.css';

const idealButton = document.querySelector('button');
const constraintsTextarea = document.querySelector('textarea');
const outputVideo = document.querySelector('video');
async function solveIdealBackStream (){
  try {
    const constraints = JSON.parse(constraintsTextarea.value);
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    outputVideo.srcObject = stream;
    outputVideo.play();
  } catch (e) {
    alert(e);
  }
}

idealButton.addEventListener('click', solveIdealBackStream)

solveIdealBackStream();