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



if (window.innerWidth <= 768) {
    const swiper = new Swiper('.testimonial-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: { el: ".swiper-pagination", clickable: true },
    });
}





document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let message = document.getElementById("message").value.trim();
    let errorMessage = document.getElementById("error-message");

    // Dummy login credentials for validation
    const validEmail = "user@example.com";
    const validPassword = "password123";

    if (name === "" || email === "" || password === "" || message === "") {
        errorMessage.textContent = "Please fill out all fields!";
        return;
    }

    if (email !== validEmail || password !== validPassword) {
        errorMessage.textContent = "Incorrect email or password. Please try again!";
        return;
    }

    errorMessage.textContent = ""; // Clear error message if successful
    alert("Message sent successfully!");
    this.reset(); // Clears form fields
});


document.getElementById("subscribeForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const email = document.getElementById("emailInput").value;
    const formData = new FormData();
    formData.append("EMAIL", email);

    fetch("https://your-mailchimp-url.com/subscribe", {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (response.ok) {
            window.location.href = "success.html"; // Redirect to success page
        } else {
            window.location.href = "error.html"; // Redirect to error page
        }
    })
    .catch(error => {
        console.error("Error:", error);
        window.location.href = "error.html"; // Redirect to error page if fetch fails
    });
});