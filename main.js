function setup() {
    canvas = createCanvas(600, 370)
    canvas.position(800, 190)
    v1 = createCapture(VIDEO)
    v1.size(500, 500)
    v1.position(250, 190)

    ps = ml5.poseNet(v1, modelLoaded)
    ps.on("pose", gotPoses)
}

noseX = 0
noseY = 0

LwristX = 0
RwristX = 0

difference = 0

function modelLoaded() {
    console.log("posenet")

}


function gotPoses(results) {
    if (results.length > 0) {
        console.log(results)
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y 

        RwristX = results[0].pose.rightWrist.x
        LwristX = results[0].pose.leftWrist.y 

        difference = LwristX - RwristX
    }
}

function draw(){
    background("bisque")
    fill("#000")
    text( "Coding is really fun!", noseX, noseY)
    textSize(difference/5)
    document.getElementById("l1").innerHTML = "Font size - " + Math.floor(difference/5) + "px"
}