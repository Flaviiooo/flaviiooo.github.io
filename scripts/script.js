const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('#navLinks') && !event.target.closest('#menuToggle')) {
        navLinks.classList.remove('active');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        navLinks.classList.remove('active');
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

//Formulaire 
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    let isValid = true;
    
    if (!name) {
        document.getElementById('nameError').textContent = 'Le nom est requis.';
        isValid = false;
    }
    if (!email) {
        document.getElementById('emailError').textContent = 'L\'email est requis.';
        isValid = false;
    }
    if (!message) {
        document.getElementById('messageError').textContent = 'Le message est requis.';
        isValid = false;
    }

    if (isValid) {
        contactForm.reset();
    }
});



// SAE 
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const videos = document.querySelectorAll('.carousel-slide video');
    let currentIndex = 0;
    let autoScroll;

    if (slides.length === 0 || dots.length === 0 || !prevBtn || !nextBtn) {
        console.error("Les éléments du carrousel ne sont pas chargés correctement.");
        return;
    }

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentIndex = index;
    }

    function startAutoScroll() {
        stopAutoScroll(); 
        autoScroll = setInterval(function() {
            let newIndex = (currentIndex + 1) % slides.length;
            showSlide(newIndex);
        }, 6000);
    }

    function stopAutoScroll() {
        clearInterval(autoScroll);
    }

    
    prevBtn.addEventListener('click', function() {
        startAutoScroll();
        let newIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(newIndex);
    });

    nextBtn.addEventListener('click', function() {
        let newIndex = (currentIndex + 1) % slides.length;
        showSlide(newIndex);
        startAutoScroll();
    });

    // Gestion des points 
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            showSlide(index);
        });
    });

    videos.forEach(video => {
        video.addEventListener('play', stopAutoScroll);
        video.addEventListener('pause', function() {
            if (![...videos].some(v => !v.paused)) {
                startAutoScroll();
            }
        });
    });

    startAutoScroll();
});


// Compétences 
document.querySelectorAll(".skill-item").forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("flipped");
    });
});


// Fleche remonter 
window.onscroll = function() {
    var scrollToTopButton = document.querySelector('.scroll-to-top');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.body.classList.add('scroll-active');
    } else {
        document.body.classList.remove('scroll-active');
    }
};

