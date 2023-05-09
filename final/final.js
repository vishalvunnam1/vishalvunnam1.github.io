var id = null;
var left = document.getElementById("left"); 
var up = document.getElementById("up"); 
var right = document.getElementById("right"); 
var htmlscore = document.getElementById("score");
var keyCode = 0;
var points = 0; 
var pauseTr = "";
var playgame = "";
const Pause = document.querySelector(".pause");
Pause.addEventListener('click', function() {
  pauseTr.pause(); 
  endgame(); 
  
  });
document.addEventListener('keydown', function(event) {
  // Get the key code from the event object
  keyCode = event.keyCode;
});


// Songs
var track = -1;
var audioTime = 0; 
var audioLength = 0; 
var audio = document.getElementById("audio"); // Take the audio track
const Boat = document.querySelector(".boat");
const Gypsy = document.querySelector(".gypsywoman");
const Flirt = document.querySelector(".bigflirt");
const Crush = document.querySelector(".crushcrushcrush");
 // Take the audio element
var matrix = setInterval(function(){
  weirdscore();
},150);

function playtrack(track)
{
  track.play();
}
function endgame()
{
  clearInterval(playgame);
audioTime = 0; 
audioLength = 0; 
track = -1; 
points = 0; 
htmlscore.style.color = "rgb(22, 151, 22)";
matrix = setInterval(function(){
  weirdscore();
},150);
}

Boat.addEventListener('click', function() {
playtrack(audio3);
clearInterval(matrix);
maininterval(audio3);
pauseTr = audio3; 


});
Gypsy.addEventListener('click', function() {
  playtrack(audio1);
  clearInterval(matrix);
  maininterval(audio1);
  pauseTr = audio1; 
  });
Flirt.addEventListener('click', function() {
  playtrack(audio2);
  clearInterval(matrix);
  maininterval(audio2);
  pauseTr = audio2;
  
  
  });
  Crush.addEventListener('click', function() {
      playtrack(audio4);
      clearInterval(matrix);
      maininterval(audio4);
      pauseTr = audio4; 
      
      });
    


function maininterval(track)
{
  playgame = setInterval(function(){
  audioTime = Math.round(track.currentTime);
  audioLength = Math.round(track.duration);
  console.log(audioLength);
  console.log(audioTime);
  arrows();
  if (audioTime>audioLength-5)
  {
    console.log("why");
    clearInterval(playgame);
  }
  
}, 1000);
}

function randomNumber() 
  {
    const random = Math.random();
    const number = Math.floor(random * 3) + 1;
    
    return number;
  }
function showkey(arrow){
    arrow.style.opacity = 1;
}
function removekey(arrow)
{
    arrow.style.opacity = 0;
}
function arrowClick(arrow, ascii){
var time = 0;
keyCode = 0; 
var id = setInterval(frame, 5);
arrow.style.filter = "invert(0%)";
function frame() {
  if (time == 100) 
  {
        console.log(points);
        clearInterval(id);
    removekey(arrow);
    clearInterval(id);
  } 
  else 
  {
    if (keyCode == ascii)
    {
        arrow.style.filter = "saturate(500) brightness(500%) invert()";
        points+=100;
        htmlscore.style.color = "rgb(22, 151, 22)";
        setscore(points);
        setTimeout(() => {  removekey(arrow); }, 300)
        console.log(points);
        clearInterval(id);
    }
    else if (keyCode !=0 && keyCode != ascii)
    {
      points-=100; 
      setscore(points);
      htmlscore.style.color = "Red";
      setTimeout(() => {  removekey(arrow); }, 300)
      clearInterval(id);
    }

    else{
        showkey(arrow);
    time++;
    }
  }
}
}

function arrows() {
     var randArrow = randomNumber();
    if (randArrow == 1)
    {
       arrowClick(left, 37);
    }
    else if (randArrow == 2)
    {
       arrowClick(up, 38);
    }
    else if (randArrow == 3)
    {
       arrowClick(right, 39);
    }
}
function weirdscore(){
  const number =  Math.floor(Math.random() * 2).toString()+Math.floor(Math.random() * 2).toString()+Math.floor(Math.random() * 2).toString()+Math.floor(Math.random() * 2).toString()+Math.floor(Math.random() * 2).toString()+Math.floor(Math.random() * 2).toString()+Math.floor(Math.random() * 2).toString();
  htmlscore.innerHTML = number; 
}
function setscore(currscore)
{
  htmlscore.innerHTML = currscore; 
}

