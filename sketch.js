let mobilenet;
let video;

function modelIsReady(){

	console.log("Model is Ready");
	mobilenet.predict(gotResults);

}


function gotResults(error, results){

	if(error){

		console.error(error);

	} else {
		
		console.log(results);
		fill(0);
		createDiv(`Label: ${results[0].label}`);
		createDiv(`Confidence: ${nf(results[0].confidence, 0, 2)}`);

	}

}

function setup() {

	createCanvas(500, 480);
	video = createCapture(VIDEO);
	video.hide();
	background(0);
	mobilenet = ml5.imageClassifier("MobileNet", video, modelIsReady);
	
}

function draw(){

	image(video, 0 ,0);

}
