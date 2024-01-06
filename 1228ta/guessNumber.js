// Global variables
let secretNumber = generateRandomNumber();

// 4. Function to generate a random number between 1 and 10
function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Function to check the user's guess
function checkGuess() {
  let userGuess = parseInt(document.getElementById("userGuess").value);
  let resultElement = document.getElementById("result");

  if (userGuess === secretNumber) {
    resultElement.textContent = "Congratulations! You guessed the correct number!";
    showImageAndPlaySound("correct_image.jpeg", "correct_sound.mp3");
    secretNumber = generateRandomNumber(); // Generate a new random number for the next round
  } else {
    resultElement.textContent = "Sorry, try again!";
    showImageAndPlaySound("wrong_image.jpeg", "wrong_sound.mp3");
  }

  document.getElementById("userGuess").value = "";
}


// Function to show image and play sound
function showImageAndPlaySound(imageSource, soundSource) {
  let imageElement = document.createElement("img");
  imageElement.src = imageSource;

  let soundElement = document.createElement("audio");
  soundElement.src = soundSource;
  soundElement.autoplay = true;

  let resultContainer = document.getElementById("result");
  resultContainer.innerHTML = "";
  resultContainer.appendChild(imageElement);
  resultContainer.appendChild(soundElement);
}
