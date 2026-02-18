/**
 * Mahendra & Mounika Anniversary Website
 * JavaScript for animations and interactions
 */

// On page load, ensure we start at the hero section
window.addEventListener('load', function() {
    // Scroll to top on page reload
    window.scrollTo(0, 0);
});

// Also handle beforeunload to scroll to top when leaving page
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});

document.addEventListener('DOMContentLoaded', function() {
    
    // ============================================
    // Splash Screen Animation
    // ============================================
    const splashScreen = document.getElementById('splash-screen');
    const mainContent = document.getElementById('main-content');
    
    // Function to hide splash and show main content
    function hideSplash() {
        splashScreen.classList.add('fade-out');
        mainContent.classList.add('visible');
        
        // Remove splash from DOM after animation
        setTimeout(() => {
            splashScreen.style.display = 'none';
        }, 1500);
    }
    
    // Start splash animation - fade after 3.5 seconds
    setTimeout(hideSplash, 3500);
    
    // ============================================
    // Scroll Indicator Click Handler
    // ============================================
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const timelineContainer = document.querySelector('.timeline-container');
    
    if (scrollIndicator && timelineContainer) {
        scrollIndicator.addEventListener('click', function() {
            timelineContainer.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }
    
    // ============================================
    // Intersection Observer for Fade Animations
    // ============================================
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    
    const fadeObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add visible class to trigger CSS animation
                entry.target.classList.add('visible');
                
                // Stop observing once animation is triggered
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        fadeObserver.observe(el);
    });
    
    // ============================================
    // Chapter Header Parallax Effect
    // ============================================
    const chapterHeaders = document.querySelectorAll('.chapter-header');
    
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        
        chapterHeaders.forEach((header, index) => {
            const rect = header.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom > 0;
            
            if (isInView) {
                const parallaxValue = (scrollY * 0.05) * (index + 1);
                header.style.transform = `translateY(${parallaxValue}px)`;
            }
        });
    });
    
    // ============================================
    // Smooth Scroll for Navigation
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ============================================
    // Add Staggered Animation Delays
    // ============================================
    const monthSections = document.querySelectorAll('.month-section');
    
    monthSections.forEach((section, sectionIndex) => {
        const cards = section.querySelectorAll('.photo-card');
        
        cards.forEach((card, cardIndex) => {
            // Remove existing transition-delay
            card.style.transitionDelay = '0s';
            
            // Add new staggered delay
            card.style.transitionDelay = `${cardIndex * 0.15}s`;
        });
    });
    
    // ============================================
    // Heart Animation Enhancement
    // ============================================
    const heartDecorations = document.querySelectorAll('.heart-decoration');
    
    heartDecorations.forEach((heart, index) => {
        // Randomize animation duration for natural feel
        const duration = 4 + Math.random() * 3;
        const delay = Math.random() * 2;
        
        heart.style.animationDuration = `${duration}s`;
        heart.style.animationDelay = `${delay}s`;
    });
    
    // ============================================
    // Heart Button - Surprise Message
    // ============================================
    const heartButton = document.getElementById('heartButton');
    const surpriseMessage = document.getElementById('surpriseMessage');
    
    if (heartButton && surpriseMessage) {
        heartButton.addEventListener('click', function() {
            surpriseMessage.classList.toggle('show');
            
            // Change button text after clicking
            const buttonText = heartButton.querySelector('.heart-text');
            if (surpriseMessage.classList.contains('show')) {
                buttonText.textContent = 'Click to Hide';
            } else {
                buttonText.textContent = 'Click for a Surprise';
            }
        });
    }
    
    // ============================================
    // Loading Complete
    // ============================================
    console.log('❤️ Mahendra & Mounika Anniversary Website Loaded ❤️');
    
    // Preload images for smoother experience
    const imageUrls = [
        'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
});

// ============================================
// Additional Utility Functions
// ============================================

/**
 * Smooth scroll to element
 */
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

/**
 * Add hover effect to photo cards
 */
function initCardHoverEffects() {
    const cards = document.querySelectorAll('.photo-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Initialize hover effects when DOM is ready
document.addEventListener('DOMContentLoaded', initCardHoverEffects);

/**
 * Generate random position offset for cards (optional enhancement)
 * This adds subtle randomization to card positions
 */
function randomizeCardPositions() {
    const cards = document.querySelectorAll('.photo-card');
    
    cards.forEach((card, index) => {
        // Skip every 3rd card for center alignment
        if (index % 3 !== 0) {
            const randomOffset = Math.random() * 30 - 15; // -15px to +15px
            card.style.marginLeft = `calc(${randomOffset}px + ${index % 2 === 0 ? '0' : 'auto'})`;
        }
    });
}

// Uncomment to enable random positioning
// document.addEventListener('DOMContentLoaded', randomizeCardPositions);
