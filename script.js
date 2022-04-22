// Javascript

//Global Variables (Default)
var pattern = [1, 2, 4, 7, 2, 8, 2, 4]; // Keeps track of secret pattern.
var progress = 0;  // Represents how far player is in guessing.
var gamePlaying = false; // Boolean to see if game is active.
var tonePlaying = false; // Boolean to see if sound is active.
var volume = 0.5; // Volume Set between 0 and 1

// Difficulty Variables
var mode = 'E'; // Initial Mode
var clueHoldTime = 1000; // How long to hold each clue's light/sound
var cluePauseTime = 333; // How long to pause in between clues
var nextClueWaitTime = 1000; // How long to wait before starting playback of the clue sequence
var guessCounter = 0; // Guess Count
var mistake = 0; // Mistake Count

// For how much time to shave off (Variable Setting)
var const1 = 0; 
var const2 = 0;

// Scoreboard Counters
var currentScore = 0;
var maxScore = 0;

// Countdown Variables
var count = 15;
var startingCount = count;
let timer = null;
var reset = false;

// Initial Call to Functions
displayMax();
displayVolume();


// Function to start game.
function StartGame() {
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    reset = false;
  
    // swapping the Start and Stop buttons
    document.getElementById("Start").classList.add("hidden");
    document.getElementById("Stop").classList.remove("hidden");
  
    // Change Stop Button Color
    document.getElementById("Stop").style.backgroundColor = 'red';
  
    // Set Difficulty of Game and Randomize Pattern
    setMode(mode);
    randomize();
  
    // Call to function
    playClueSequence();
}

// Function that randomizes sequence of patterns (100% need this)
function randomize() {
  for (let i = 0; i < 8; i++) { // 6 is arbitrary, but we can improve this by changing the constant 8
    pattern[i] = Math.floor(Math.random() * 8) + 1;
  }
}

// Function to end game.
function StopGame() {
  if(currentScore > maxScore) {
    maxScore = currentScore;
    displayMax();
  }
  reset = true;
  gamePlaying = false;
  document.getElementById("Start").classList.remove("hidden");
  document.getElementById("Stop").classList.add("hidden");
}

// Volume up function
function volumeUp() {
  volume += 0.1;
  if (volume > 1) {
    volume = 1;
  }
  displayVolume();
}

// Volume down function
function volumeDown() {
  volume -= 0.1;
  if (volume < 0.1) {
    volume = 0.1;
  }
  displayVolume();
}

// Function dynamically displays scoreboard
function displayMax() {
  document.getElementById("Dynamic").innerHTML = "Max Score: " + maxScore + " | Current Score: " + currentScore;
}

// Function that dynamically displays guesses left
function displayGuess(){
  document.getElementById("Guesses").innerHTML = "Guesses Left: " + (3 - mistake);
}

// Function that dynamically displays volume
function displayVolume() {
  document.getElementById("VolumeDisplay").innerHTML = "Volume Level: " + Math.round(volume*100) + "%";
}

// Sound Synthesis Functions (Pre-filled)
const freqMap = {
  // Referenced a Piano Freq. Chart
  1: 130.82,
  2: 146.83,
  3: 164.81,
  4: 174.61,
  5: 196,
  6: 220,
  7: 246.94,
  8: 261.63
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}
// Page Initialization (Init Sound Synthesizer)
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}
function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}
function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0; i<=progress; i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  // Playback Speeds Up (On Every Play)
  // const1 and const2 are determined by difficulty setting
  clueHoldTime -= const1;
  cluePauseTime -= const2;
  // Built in JS Function for timer
  clearInterval(timer); 
  timer = setInterval(countdown, 1000);
}

// Lose Game Function
function loseGame(btn) {
  ImageLoss(btn);
  StopGame();
  alert("Game Over. You Lost!")
}

// Win Game Function
function winGame() {
  StopGame();
  alert("Congrats. You Won!")
}

// Countdown Function
function countdown() {
  document.getElementById("Countdown").innerHTML ="Countdown: " + count + " seconds";
  count -= 1; // Always decrease by 1 second
  if (count < 0 || reset) { // When count = 0, or reset is true
    if (!reset) {
      loseGame(1); // Display loss as button 1
    }
    resetTimer();
    clearInterval(timer);
  }
}

// Reset Timer (Display)
function resetTimer() {
  document.getElementById("Countdown").innerHTML ="Countdown: " + count + " seconds";
}

// Function that shows image when loss
function ImageLoss (btn) {
  document.getElementById("button" + btn).style.backgroundImage = "url('https://cdn.glitch.global/25d77991-2cbb-4952-846f-d35af00487ad/istockphoto-959957308-612x612.jpeg?v=1650650679904')";
    setTimeout(ImageRestore, 1500, btn);
}

// Function that shows image when win
function ImageWin(btn) {
  document.getElementById("button" + btn).style.backgroundImage = "url('https://cdn.glitch.global/25d77991-2cbb-4952-846f-d35af00487ad/you-win-poster-with-prize-cup-vector-17052074.png?v=1650650576205')";
  setTimeout(ImageRestore, 1500, btn);
}

// Function that removes background image
function ImageRestore(btn){
  document.getElementById("button" + btn).style.backgroundImage = "none";
}

// Main Logic for guesses
function guess(btn){
  var MaxSize = pattern.length-1;
  if(!gamePlaying){
    return;
  }
  if (btn == pattern[guessCounter]) {
    if (guessCounter == progress) {
      count = startingCount;
      if (progress == MaxSize) {
        MaxSize++;
        currentScore = MaxSize;
        displayMax();
        ImageWin(btn);
        winGame();
      }
      else {
        progress++;
        currentScore = progress;
        displayMax();
        playClueSequence();
      }
    }
    else {
      guessCounter++;
    }  
  }
  else {
    mistake++;
    if (mistake == 3) { // 3 Strikes and Out
      loseGame(btn);
    }
    else {
      alert("Wrong Choice. You have " + (3 - mistake) + " left");
      playClueSequence();
      count = startingCount;
    }
  }
}

// Difficulty Function
function setMode(btn) {
  if (btn == 'E') {
    mistake = 0; // All 3 Guesses Available
    clueHoldTime = 1000; 
    cluePauseTime = 333
    const1 = 50;
    const2 = 20;
    count = 15;
    startingCount = count;
    resetTimer();
    mode = 'E';
  }
  else if (btn == 'M') {
    mistake = 1; // 2 Guesses Available
    clueHoldTime = 750; 
    cluePauseTime = 233;
    const1 = 30;
    const2 = 15;
    count = 10;
    startingCount = count;
    resetTimer();
    mode = 'M';
  }
  else if (btn == 'H') {
    mistake = 2;  // 1 Guess Available
    clueHoldTime = 500; 
    cluePauseTime = 133;
    const1 = 20;
    const2 = 12;
    count = 8;
    startingCount = count;
    resetTimer();
    mode = 'H';
  }
  displayGuess();
}