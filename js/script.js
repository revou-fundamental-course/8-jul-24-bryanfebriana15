// Deklasrasi Variable
var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("mycontent");
let resultArea = document.querySelector(".comment");

alertContent = document.querySelector(".alert-content");
alertText = document.querySelector("#alertText");
var alert = document.getElementById("myAlert");
var span = document.getElementsByClassName("close")[0];


// Javascript Alert 
function calculate() {

  if (age.value == '' || height.value == '' || weight.value == '' || (male.checked == false && female.checked == false)) {
    alert.style.display = "block";
    alertText.innerHTML = 'All fields are required!';

  } else {
    countBmi();
  }
}


// Javascript Calculate Male or Female
function countBmi() {
  var p = [age.value, height.value, weight.value];
  if (male.checked) {
    p.push("male");
  } else if (female.checked) {
    p.push("female");
  }


  // Javascript to Calculate Form
  var bmi = Number(p[2]) / (Number(p[1]) / 100 * Number(p[1]) / 100);

  var result = '';
  if (bmi < 18.5) {
    result = "Underweight";
  } if (18.5 <= bmi && bmi <= 24.9) {
    result = "Healthy";
  } if (25 <= bmi && bmi <= 29.9) {
    result = "Overweight";
  } if (30 <= bmi && bmi <= 34.9) {
    result = "Obese";
  } if (35 <= bmi) {
    result = "Extremely Obese";
  }


  // Javascript to Reset Form
  function resetForm() {

    document.getElementById("mycontent").reset();
  }



  // Javascript Result
  resultArea.style.display = "block";
  document.querySelector(".comment").innerHTML = `You are <span id="comment"> ${result} </span>`;
  document.querySelector("#result").innerHTML = bmi.toFixed(2);


}


// Javascript when user clicks on (x), close the alert
span.onclick = function () {
  alert.style.display = "none";
}

// Javascript when the user clicks anywhere outside of the alert, close it
window.onclick = function (event) {
  if (event.target == alert) {
    alert.style.display = "none";
  }
}







