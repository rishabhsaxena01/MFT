const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

var acc = document.getElementsByClassName('accordion');
var i;
var len = acc.length;
for (i = 0; i < len; i++) {
    acc[i].addEventListener('click', function() {
        this.classList.toggle('active');
        var panel = this.nextElementSibling;
        if(panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + 'px'; 
        }
    })    
}

// function subscribe(){
//     document.querySelector('.btn').onclick = () =>{
//         alert("Thank You for subscribing to updates!");
//     }
// }

var form = document.getElementById("subscription-btn");
function handleForm(event) { event.preventDefault();
    var formData = new FormData(event.target);
    for (var pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
    }
    console.log(Object.fromEntries(formData));
} 
form.addEventListener('submit', handleForm);