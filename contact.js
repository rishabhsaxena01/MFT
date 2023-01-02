const form = document.getElementById("form-contact")
form.addEventListener("submit", async function (event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    await fetch("https://backend-mftgym.onrender.com/contact/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  form.reset();
});