document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("snowCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const flakes = [];

    function createFlakes() {
        for (let i = 0; i < 100; i++) { 
            flakes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 3 + 1, 
                speed: Math.random() * 1 + 1, 
                wind: Math.random() * 1 - 0.5, 
            });
        }
    }

    function drawFlakes() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";

        flakes.forEach(flake => {
            ctx.beginPath();
            ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
            ctx.fill();

            flake.y += flake.speed;
            flake.x += flake.wind;

            if (flake.y > canvas.height) {
                flake.y = 0;
                flake.x = Math.random() * canvas.width;
            }
        });

        requestAnimationFrame(drawFlakes);
    }

    createFlakes();
    drawFlakes();

    window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        flakes.length = 0;
        createFlakes();
    });
});
