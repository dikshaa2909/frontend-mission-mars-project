document.addEventListener('DOMContentLoaded', function() {
    // Countdown Timer
    const countdownDate = new Date('November 15, 2025 00:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').innerText = days.toString().padStart(2, '0');
        document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
        document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
        
        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('days').innerText = '00';
            document.getElementById('hours').innerText = '00';
            document.getElementById('minutes').innerText = '00';
            document.getElementById('seconds').innerText = '00';
        }
    }
    
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
    
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const ctaButton = document.querySelector('.cta-button');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            
            if (navLinks) {
                navLinks.classList.toggle('active');
                
                if (navLinks.classList.contains('active')) {
                    navLinks.style.display = 'flex';
                    navLinks.style.flexDirection = 'column';
                    navLinks.style.position = 'absolute';
                    navLinks.style.top = '80px';
                    navLinks.style.left = '0';
                    navLinks.style.width = '100%';
                    navLinks.style.backgroundColor = 'rgba(1, 22, 39, 0.95)';
                    navLinks.style.padding = '20px';
                    navLinks.style.zIndex = '1000';
                } else {
                    navLinks.style.display = '';
                }
            }
            
            if (ctaButton) {
                ctaButton.classList.toggle('active');
                
                if (ctaButton.classList.contains('active')) {
                    ctaButton.style.display = 'block';
                    ctaButton.style.position = 'absolute';
                    ctaButton.style.top = navLinks ? navLinks.offsetHeight + 80 + 'px' : '80px';
                    ctaButton.style.left = '0';
                    ctaButton.style.width = '100%';
                    ctaButton.style.backgroundColor = 'rgba(1, 22, 39, 0.95)';
                    ctaButton.style.padding = '20px';
                    ctaButton.style.textAlign = 'center';
                    ctaButton.style.zIndex = '1000';
                } else {
                    ctaButton.style.display = '';
                }
            }
        });
    }
    
    // Scroll Animation
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.backgroundColor = 'rgba(1, 22, 39, 0.95)';
        } else {
            header.style.padding = '20px 0';
            header.style.backgroundColor = 'rgba(1, 22, 39, 0.9)';
        }
    });
    
    // Form Submission
    const signupForm = document.querySelector('.signup-form');
    
    if (signupForm) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nameInput = this.querySelector('input[type="text"]');
            const emailInput = this.querySelector('input[type="email"]');
            
            if (nameInput && emailInput) {
                // In a real application, you would send this data to your server
                alert(`Thank you, ${nameInput.value}! You've been subscribed to mission updates.`);
                
                // Reset form
                this.reset();
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (menuToggle && menuToggle.classList.contains('active')) {
                    menuToggle.click();
                }
            }
        });
    });
});