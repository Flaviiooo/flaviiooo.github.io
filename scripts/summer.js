document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("petalsCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const petals = [];

    function createPetals() {
        for (let i = 0; i < 30; i++) { // Nombre 
            petals.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 10 + 5, // Taille 
                speed: Math.random() * 2 + 1, // Vitesse
                wind: Math.random() * 2 - 1, // Effet (gauche/droite)
                color: `rgba(0, 162, 255, ${Math.random() * 0.8 + 0.2})`, 
                rotation: Math.random() * 360, 
                rotationSpeed: Math.random() * 3 - 1.5 
            });
        }
    }

    function drawPetals() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        petals.forEach(petal => {
            ctx.save();
            ctx.translate(petal.x, petal.y);
            ctx.rotate((petal.rotation * Math.PI) / 180);
            ctx.fillStyle = petal.color;
            
            ctx.beginPath();
            ctx.ellipse(0, 0, petal.radius, petal.radius / 2, 0, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.restore();

            petal.y += petal.speed;
            petal.x += petal.wind;
            petal.rotation += petal.rotationSpeed;

            if (petal.y > canvas.height) {
                petal.y = 0;
                petal.x = Math.random() * canvas.width;
            }
        });

        requestAnimationFrame(drawPetals);
    }

    createPetals();
    drawPetals();

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        petals.length = 0;
        createPetals();
    });
});


//Soleil 
const sun = document.getElementById('sun');

function startSunAnimation() {
    sun.style.animation = 'none';
    setTimeout(() => {
        sun.style.animation = 'sunrise 6s ease-out, glow 2s infinite alternate ease-in-out, sunset 6s ease-out 6s';
    }, 50);  
}

startSunAnimation();

setInterval(startSunAnimation, 15000);  
