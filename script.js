var fact = document.getElementById('getFact');
fact.addEventListener('click', getRandomFact);
var factp = document.getElementById('factp');

function getRandomFact() {
    const facts = [
        'For every 9 people excecuted on death row, 1 person is proven innocent.',
        'In Georgia, a person is 17 times more likely to be put on death row for murder if the victim is white than a person of color.',
        '186 people have been released or exonerated from death row since 1973.',
        'More than 8 in 10 executions have happened in the South since 1976.',
        '366 people who were children at the time of their offense were executed before such executions were banned in 2005.',
        'At least 44 people with intellectual disability were executed before the Supreme Court banned such executions in 2002.',
        'Mental health experts estimate at least 20% of people on death row today have a serious mental illness.',
        'The death penalty is far more expensive than a system in which life imprisonment without parole is the maximum sentence.',
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    factp.innerHTML= facts[randomIndex];
}/* .js files add interaction to your website */

var displayMessage = document.getElementById("message");

var inputBtn = document.getElementById("inputBtn");
inputBtn.addEventListener("click", displayMotivation);

function displayMotivation(){
  //This variable must be in the function or it will not work
  var inputText = document.getElementById("inputText").value;
  
  displayMessage.innerHTML = "Hi, My name is " + inputText + ". I am writing to urge you to pass the Federal Death Penalty Prohibition Act of 2021 to abolish the federal and military death penalty in the United States. Our nation is strong enough and smart enough that it can hold dangerous offenders accountable and be safe from them without executions. We do that every day in the vast majority of homicide cases. The death penalty is not an effective tool to stop crime. We know that: Government makes mistakes; The criminal legal system is fraught with disparity and unfairness; Prison workers should not be forced to take on the burden of killing defenseless prisoners once, let alone at the rapid pace of the recent federal execution schedule; It is a cruel hoax to suggest that executions provide healing to murder victim family members. We can and must do better for the families left behind in the wake of violence. Thank you for your time and attention to this serious matter.";
}
