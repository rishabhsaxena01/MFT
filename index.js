var slide = document.getElementById("slider");
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');

btn1.onclick = function () {
    slide.style.transform = "translateX(0px)";
    btn1.classList.add('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');    
};

btn2.onclick = function () {
    slide.style.transform = "translateX(-100%)";
    btn1.classList.remove('active');
    btn2.classList.add('active');
    btn3.classList.remove('active');
    btn4.classList.remove('active');
};

btn3.onclick = function () {
    slide.style.transform = "translateX(-200%)";
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.add('active');
    btn4.classList.remove('active');
};

btn4.onclick = function () {
    slide.style.transform = "translateX(-300%)";
    btn1.classList.remove('active');
    btn2.classList.remove('active');
    btn3.classList.remove('active');
    btn4.classList.add('active'); 
};
 

var cust_reviews = [".Images\review-1.png",
    "Images\review-2.png",
    "D:\myWeb Projects\MFT\Images\review-3.png",
    "D:\myWeb Projects\MFT\Images\review-4.png"] ;

var num = 0;

function next() {
    var slider = document.getElementById("review-image");
    num++ ;
    if (num >= cust_reviews.length) {
        num = 0;
    }
    slider.src = cust_reviews[num];
}

function prev() {
    var slider = document.getElementById("review-image");
    num-- ;
    if (num < 0) {
        num = cust_reviews.length - 1 ;
    }
    slider.src = cust_reviews[num];
}

document.getElementById("get-in-touch-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    for (var pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
    }
    console.log(Object.fromEntries(formData));
});