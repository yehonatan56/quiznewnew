function answer(button, val, classToDisable, next) {
  var nextId;
  if (val == 'yes') {
    button.setAttribute("class", `shadow yes click ${classToDisable}`);
    console.log(next);
    score.innerHTML = Number(score.innerHTML) + 1;
    var counter = 0;
    //setinterval
var interval = setInterval(function(){
    //next clinte
nextId =  document.getElementById("quiz-"+next);
console.log(nextId);

nextId.scrollIntoView({behavior: "smooth" , block: "end"});
counter++;
if (counter >= 1) {
  clearInterval(interval);
}
} , 1000);

document.querySelectorAll(`.${classToDisable}`).forEach(el => {
      el.disabled = true;
    })
  } else if (val == 'no') {
    button.setAttribute("class", `shadow no ${classToDisable}`);
    var countertow = 0;
    var intervaltow = setInterval(function () {
       button.setAttribute("class", `shadow ${classToDisable}`);
      countertow++;
      if (countertow >= 1) {
        clearInterval(intervaltow);
      }
    }, 1000);
  }
}
var click = 1;
function answerorganize(button , corrent) {
  console.log(click);
  var answerorganize = document.getElementById("answer-organize");
  if (corrent == 1) {
    if (click == 1) {
      button.setAttribute("class" , "one-corrent")         
      click++;
      answerorganize.innerHTML = Number(answerorganize.innerHTML) + 1;
    }
  }
  if (corrent == 2) {
    if (click == 2) {
      button.setAttribute("class" , "tow-corrent")         
      click++;
      answerorganize.innerHTML = Number(answerorganize.innerHTML) + 1;
    }
  }
  if (corrent == 3) {
    if (click == 3) {
      button.setAttribute("class" , "three-corrent")         
      click++;
      answerorganize.innerHTML = Number(answerorganize.innerHTML) + 1;
   }
  }
  if (corrent == 4) {
    if (click == 4) {
      button.setAttribute("class" , "four-corrent")         
      click++;
    answerorganize.innerHTML = Number(answerorganize.innerHTML) + 1;
     score.innerHTML = Number(score.innerHTML) + 1;
    }
  }
}