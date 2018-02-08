"use strict"
console.log("hello");

var mujiInPocket = document.getElementById("muji-in-pocket");
var muji = document.getElementById("muji");
var phoneInPocket = document.getElementById("phone-in-pocket");
var phone = document.getElementById("phone");
var glassesOnFace = document.getElementById("glasses-on-face");
var glasses = document.getElementById("glasses");


//muji event listeners
//full opacity after hover
mujiInPocket.addEventListener('mouseover', function() {
  mujiInPocket.style.opacity = "1";
})
//click muji for item info
mujiInPocket.addEventListener('click', function() {
  muji.style.display = "block";
})
// click box again to exit
muji.addEventListener('click', function() {
  muji.style.display = "none";
})

//phone event listeners
//full opacity after hover
phoneInPocket.addEventListener('mouseover', function() {
  phoneInPocket.style.opacity = "1";
})
//click phone for item info
phoneInPocket.addEventListener('click', function() {
  phone.style.display = "block";
})
//click box again to exit
phone.addEventListener('click', function() {
  phone.style.display = "none";
})

//glasses event listeners
//full opacity after hover
glassesOnFace.addEventListener('mouseover', function() {
  glassesOnFace.style.opacity = "1";
})
//click glasses for item info
glassesOnFace.addEventListener('click', function() {
  glasses.style.display = "block";
})
//click box again to exit
glasses.addEventListener('click', function() {
  glasses.style.display = "none";
})
