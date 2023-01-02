const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

var acc = document.getElementsByClassName("accordion");
var i;
var len = acc.length;
for (i = 0; i < len; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


//code to add subscription
var form = document.getElementById("subscription-btn");
async function handleForm(event) {
  event.preventDefault();
  var formData = new FormData(event.target);
  await fetch("https://backend-mftgym.onrender.com/subscription/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  // const inputs = document.getElementsByTagName('input');

  // for (index = 0; index < inputs.length; ++index) {
  //   inputs[index].value = '';
  // }
  form.reset()
}
form.addEventListener("submit", handleForm);




// code to get in touch form
document.getElementById("get-in-touch-form").addEventListener("submit", function (event) {
  event.preventDefault();
  var formData = new FormData(event.target);
  for (var pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
  }
  console.log(Object.fromEntries(formData));
});