document.getElementById("membership-registration").addEventListener("submit", async function (event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    await fetch("http://localhost:8000/customer/add", {
    method: "POST",
    body: formData,
  });
});