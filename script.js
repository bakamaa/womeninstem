function check(){
console.log("TEST");
var question1 = document.quiz.question1.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var correct=0;

if (question1 == "Radia Perlman") {
  correct++;
}
  
 if (question3 == "Annie Easley") {
  correct++;
}
if (question4 == "Cathy Tilton") {
  correct++;
}
var messages=["Great job!" , "That's just okay", "You really need to do better"];
 
var range;
  
if(correct < 1) {
  range= 2;
}
else if(correct > 0 && correct <3){
  range = 1;
}
else if (correct == 3){
  range = 0;
}

document.getElementById("after_submit").style.visibility= "visible";
document.getElementById("message").innerHTML= messages[range]; 

document.getElementById("number_correct").innerHTML= "You got " + correct + " correct.";
  
  console.log("TEST 2");
  
 console.log("It finished!")
// var question3 = document.quiz.question3.value;
// var question4 = document.quiz.question4.value;
// var correct=0;

// if (question1 = "Radia Perlman") {
//   correct++;
// }
// if (question3 = "Radia Perlman") {
//   correct++;
// }
// if (question4 = "Cathy Tilton") {
//   correct++;
// }
// var messages=["Great job!" , "That's just okay", "You really need to do better"];
 
// var range;

// if(correct < 1) {
//   range= 3;
// }
// if(correct > 0 && correct <3){
//   range = 2;
// }
// if(correct > 0 && correct <4){
//   range = 1;
// }
// if(correct == 4){
//   range = 0;
// }

// document.getElementById("after_submit").style.visibility= "visible";
// document.getElementById("message").innerHTML= messages(range); 

// document.getElementById("number_correct").innerHTML= "You got " + correct + " correct.";
  
//   alert("HI!");
//   console.log("TEST 2");
}