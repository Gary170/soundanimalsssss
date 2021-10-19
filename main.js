//https://teachablemachine.withgoogle.com/models/egY0Ozch-/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/egY0Ozch-/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}