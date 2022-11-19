document.getElementById("franchise-form").addEventListener("submit", async function (event) {
    event.preventDefault();
    var formData = new FormData(event.target);
  await fetch("http://localhost:8000/franchise/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  });
});