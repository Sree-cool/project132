Status = "";

function preload(){
  desk = loadImage('desk.jpg');
}


function setup() {
  canvas = createCanvas(380, 380);
  canvas.center();
  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() {
    console.log("Model Loaded!")
    Status = true;
  }

  function gotResult(error, results) {
    if (error) {
      console.log(error);
    }
    console.log(results);
    objects = results;
  }