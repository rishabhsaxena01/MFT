document.getElementById("franchise-form").addEventListener("submit", function (event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    for (var pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
    }
    console.log(Object.fromEntries(formData));
});