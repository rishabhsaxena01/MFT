const form = document.getElementById("membership-registration")
form.addEventListener("submit", async function (event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    await fetch("https://backend-mftgym.onrender.com/customer/add", {
    method: "POST",
    body: formData,
  });
  form.reset();
});