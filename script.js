function initMap() {
    const location = { lat: 40.712776, lng: -74.005974 }; // Exemplu: coordonatele New York
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 10,
        center: location
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        if (name.value === "" || email.value === "" || message.value === "") {
            alert('Please fill out all fields.');
        } else {
            alert('Message sent successfully!');
            form.reset();
        }
    });

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                const hash = this.hash;
                document.querySelector(hash).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const toggleButtons = document.querySelectorAll('.toggle-details');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const details = this.nextElementSibling;
            if (details.style.display === "none" || details.style.display === "") {
                details.style.display = "block";
                this.textContent = "Hide Details";
            } else {
                details.style.display = "none";
                this.textContent = "View Details";
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.service-item .btn-primary');
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            const serviceName = event.target.parentElement.querySelector('h3').textContent;
            window.location.href = `${serviceName.toLowerCase().replace(' ', '')}.html`;
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.btn-link').forEach(function(btn) {
        btn.addEventListener('click', function(event) {
            if (btn.getAttribute('href').startsWith('#')) {
                event.preventDefault();
                document.querySelector(btn.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.btn-link').forEach(function(btn) {
        btn.addEventListener('click', function(event) {
            const target = btn.getAttribute('href');
            if (target.startsWith('#')) {
                event.preventDefault();
                document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
            } else if (target.startsWith('mailto:')) {
                window.location.href = target;
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

    document.addEventListener('DOMContentLoaded', function() {
        var dropdownLinks = document.querySelectorAll('.dropdown-content a');

        dropdownLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                dropdownLinks.forEach(function(l) {
                    l.classList.remove('active');
                });
                this.classList.add('active');
            });
        });
    });

    function initMap() {
            var location = { lat: 40.7128, lng: -74.0060 }; // Coordonatele pentru New York City
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 10,
                center: location
            });
            var marker = new google.maps.Marker({
                position: location,
                map: map
            });
        }