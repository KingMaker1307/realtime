noseX=0;
noseY=0;
function setup(){
    canvas = createCanvas(300,300);
    canvas.position(530,160);
    video = createCapture(VIDEO);
    video.size(300,300)
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose",Poses);
}
function preload(){
    clown_nose=loadImage("https://i.postimg.cc/J7FsNwf1/nose.png")
}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose,noseX-10,noseY-3,25,25);
}
function Poses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x ="+noseX);
        console.log("nose y ="+noseY);
    }
}
function modelLoaded(){
    console.log(modelLoaded);
}