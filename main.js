function setup() {
video = createCapture(VIDEO);
video.position(0,200);

canvas=createCanvas(600,600);
canvas.position(750,150);

poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('Pose', got_poses);
}
function draw(){
    background('#5e5858');
    
}
function modelLoaded(){
console.log('poseNet is initialized');
}

function got_poses(results) {
if (results > 0){
    console.log(results);
}
}