
var home=document.getElementById("sec1");
var about=document.getElementById("Contact11");
// var contact=document.getElementById("contactContent");
// var proDisplay=document.getElementById("pro-display-page");
// var proInfo=document.getElementById("pro-info-page");

home.style.display="block";
about.style.display="none";
// contact.style.display="none";
// proDisplay.style.display="none";
// proInfo.style.display="none";


var homeBtn=document.getElementById("homeBtn");
homeBtn.addEventListener('click',function () {
    home.style.display="none";
    about.style.display="block";
    // contact.style.display="none";
    // proDisplay.style.display="none";
    // proInfo.style.display="none";
});

/*
var aboutBtn=document.getElementById("aboutBtn");
aboutBtn.addEventListener('click',function () {
    home.style.display="none";
    about.style.display="block";
    contact.style.display="none";
    proDisplay.style.display="none";
    proInfo.style.display="none";
});
var contactBtn=document.getElementById("contactBtn");
contactBtn.addEventListener('click',function () {
    home.style.display="none";
    about.style.display="none";
    contact.style.display="block";
    proDisplay.style.display="none";
    proInfo.style.display="none";
});

var proDisBtn=document.getElementById("pro-display-btn");
proDisBtn.addEventListener('click',function () {
    home.style.display="none";
    about.style.display="none";
    contact.style.display="none";
    proDisplay.style.display="block";
    proInfo.style.display="none";

});

var proInfoBtn=document.getElementById("pro-info-btn");
proInfoBtn.addEventListener('click',function () {
    home.style.display="none";
    about.style.display="none";
    contact.style.display="none";
    proDisplay.style.display="none";
    proInfo.style.display="block";

});
*/


