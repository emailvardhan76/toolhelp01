import React, { useEffect, useRef } from 'react';
import './Background.css';

const Background = () => {
    const canvasRef = useRef(null);
    const particles = useRef([]);
    const mouse = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        const symbols = ['⚙️', '✏️', '🔧', '📎', '•', '•', '•']; // Mix of tools and dots

        const createParticle = (x, y) => {
            const symbol = symbols[Math.floor(Math.random() * symbols.length)];
            particles.current.push({
                x,
                y,
                symbol,
                life: 1,
                vx: (Math.random() - 0.5) * 1, // Slight random movement
                vy: (Math.random() - 0.5) * 1
            });
        };

        const handleMouseMove = (e) => {
            mouse.current = { x: e.clientX, y: e.clientY };
            // Create particle on move
            if (Math.random() > 0.5) { // Throttling creation slightly
                createParticle(e.clientX, e.clientY);
            }
        };
        window.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw particles
            particles.current.forEach((p, index) => {
                p.life -= 0.02; // Fade out speed
                p.x += p.vx;
                p.y += p.vy;

                ctx.font = p.symbol === '•' ? '20px serif' : '16px serif';
                ctx.fillStyle = `rgba(0, 0, 0, ${p.life})`;
                ctx.fillText(p.symbol, p.x, p.y);

                if (p.life <= 0) {
                    particles.current.splice(index, 1);
                }
            });

            requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return <canvas ref={canvasRef} className="animated-background" />;
};

export default Background;
