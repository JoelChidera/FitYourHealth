let navBar = document.querySelector('navbar');
let menuIcon = document.querySelector('#menu-icon');

let navLinks = document.querySelectorAll('header nav a');
let sections = document.querySelectorAll('section');





window.onscroll = function() {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


function submitForm() {
    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let email = document.getElementById("email").value;

    if (name === "" || number === "" || email === "") {
        alert("Please fill in all fields");
    } else {
        alert("Form Submitted Successfully!! We Will Get Back To You Soon.");
    }
}

























document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let numberInput = document.getElementById("numberInput").value;
    let confirmNumberInput = document.getElementById("confirmNumberInput").value;
    let errorMessage = document.getElementById("errorMessage");

    // Validation
    if (password !== confirmPassword) {
        errorMessage.innerText = "Passwords do not match!";
        return;
    }

    if (numberInput !== confirmNumberInput) {
        errorMessage.innerText = "Numbers do not match!";
        return;
    }

    errorMessage.innerText = "";
    alert("Form submitted successfully!");
});
</script>