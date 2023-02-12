

document.getElementById("btn").addEventListener("click" , function(){




  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  let bmi = weight / (height * height);


  switch(true){
    case(bmi < 18.5): document.getElementById("calcule").innerHTML = `your BMI is  ${bmi} : under weight` 
    , document.getElementById("calcule").style.backgroundColor = "orange";
    break;
    case(bmi > 18.5 && bmi < 24.9): document.getElementById("calcule").innerHTML = `your BMI is  ${bmi} : normal`
    , document.getElementById("calcule").style.backgroundColor = "green";
    break;
    case(bmi > 24.9 && bmi < 29.9): document.getElementById("calcule").innerHTML = `your BMI is  ${bmi} : over weight`
    , document.getElementById("calcule").style.backgroundColor = "orange";
    break;
    case(bmi > 29.9 && bmi < 34.9): document.getElementById("calcule").innerHTML = `your BMI is  ${bmi} : obesity 1`
    , document.getElementById("calcule").style.backgroundColor = "olive";
    break;
    case(bmi > 34.9 && bmi < 39.9): document.getElementById("calcule").innerHTML = `your BMI is  ${bmi} : obesity 2`
    , document.getElementById("calcule").style.backgroundColor = "red";
    break;
    case(bmi > 39.9): document.getElementById("calcule").innerHTML = `your BMI is  ${bmi} : extreme obesity`
    , document.getElementById("calcule").style.backgroundColor = "maroon";
    break;
    default: document.getElementById("calcule").innerHTML = `? Try Again`
  }
});

