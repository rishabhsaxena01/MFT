const form = document.getElementById("franchise-form")
form.addEventListener("submit", async function (event) {
    event.preventDefault();
    var formData = new FormData(event.target);
  await fetch("https://backend-mftgym.onrender.com/franchise/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
  form.reset();
});