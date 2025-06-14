
        // Homepage specific JavaScript
        function initPage() {
            // Hero section typing effect
            const heroSubtitle = document.querySelector('.hero p');
            if (heroSubtitle) {
                const texts = [
                    "24/7 Emergency Services",
                    "Licensed & Insured Professionals",
                    "Serving the Community Since 2010"
                ];
                let currentIndex = 0;
                
                function typeWriter(text, i, callback) {
                    if (i < text.length) {
                        heroSubtitle.textContent = text.substring(0, i + 1);
                        setTimeout(function() {
                            typeWriter(text, i + 1, callback)
                        }, 100);
                    } else if (typeof callback == 'function') {
                        setTimeout(callback, 1000);
                    }
                }
                
                function startTyping() {
                    typeWriter(texts[currentIndex], 0, function() {
                        setTimeout(eraseText, 2000);
                    });
                }
                
                function eraseText() {
                    let text = heroSubtitle.textContent;
                    if (text.length > 0) {
                        heroSubtitle.textContent = text.substring(0, text.length - 1);
                        setTimeout(eraseText, 50);
                    } else {
                        currentIndex = (currentIndex + 1) % texts.length;
                        startTyping();
                    }
                }
                
                startTyping();
            }
            
            // Testimonial slider
            const testimonials = document.querySelectorAll('.testimonial-card');
            if (testimonials.length > 0) {
                let currentTestimonial = 0;
                
                function showTestimonial(index) {
                    testimonials.forEach((testimonial, i) => {
                        testimonial.style.display = i === index ? 'block' : 'none';
                    });
                }
                
                function nextTestimonial() {
                    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
                    showTestimonial(currentTestimonial);
                }
                
                // Initially show first testimonial
                showTestimonial(0);
                
                // Auto-rotate testimonials every 5 seconds
                setInterval(nextTestimonial, 5000);
            }
        }

        // Initialize the page
        initPage();
        