status = "";

function setup() {
    Canvas = createCanvas(480, 340);
    Canvas.center();
    Video = createCapture(VIDEO);
    Video.size(480, 380);
    Video.hide();
}


function Start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status:Detecting Objects";
    Text_Box= document.getElementById("text").value;
}
function modelLoaded(){
    console.log("model is Loaded");
    status = true;
}
function draw(){
    image(Video,0,0,480,380);
}