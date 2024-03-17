var remindBtn = document.querySelectorAll(".remind-btn");
console.log(remindBtn);
remindBtn.forEach(function (element) {
  element.addEventListener("click", displayForm);
});
function displayForm() {
  let forms = document.querySelectorAll(".reminder-form");
  forms.forEach(function (form) {
    form.classList.remove("d-none");
  });
}

var countDownDate = new Date("march 13, 2024 00:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".heart-container");
  const numberOfHearts = 10; // Change this value as needed

  for (let i = 0; i < numberOfHearts; i++) {
    const heart = document.createElement("span");
    heart.innerHTML = "❤"; // You can change this to any love symbol you prefer
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw"; // Random horizontal position
    heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // Random animation duration
    container.appendChild(heart);
  }
});
