// JavaScript principale per il sito web Servizio di Leveling per Pet - Versione semplificata

document.addEventListener('DOMContentLoaded', function() {
    // Simple function to initialize tooltips if Bootstrap is available
    function initTooltips() {
        if (typeof bootstrap === 'undefined' || !bootstrap.Tooltip) {
            return;
        }
        
        var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        for (var i = 0; i < tooltipTriggerList.length; i++) {
            new bootstrap.Tooltip(tooltipTriggerList[i]);
        }
    }
    
    // Try to initialize tooltips
    try {
        initTooltips();
    } catch (e) {
        console.log('Tooltip initialization error:', e);
    }

    // Form submission handling
    var contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form values
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var message = document.getElementById('message').value;
            
            // Validazione semplice
            if (!name || !email || !message) {
                alert('Per favore compila tutti i campi');
                return;
            }
            
            // Simulate form submission
            var submitBtn = contactForm.querySelector('button[type="submit"]');
            var originalText = submitBtn.textContent || submitBtn.innerText;
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Invio in corso...';
            
            // Simulate API call with timeout
            setTimeout(function() {
                // Reset form
                contactForm.reset();
                
                // Show success message
                var formContainer = contactForm.parentElement;
                var successMessage = document.createElement('div');
                successMessage.className = 'alert alert-success mt-3';
                successMessage.textContent = 'Grazie per il tuo messaggio! Ti risponderemo presto.';
                formContainer.appendChild(successMessage);
                
                // Reset button
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
                
                // Remove success message after 5 seconds
                setTimeout(function() {
                    if (successMessage.parentNode) {
                        successMessage.parentNode.removeChild(successMessage);
                    }
                }, 5000);
            }, 1500);
        });
    }

    // Add pricing toggle functionality
    var pricingToggle = document.getElementById('pricing-toggle');
    if (pricingToggle) {
        pricingToggle.addEventListener('change', function() {
            var monthlyPrices = document.querySelectorAll('.monthly-price');
            var yearlyPrices = document.querySelectorAll('.yearly-price');
            
            if (this.checked) {
                // Show yearly prices
                for (var i = 0; i < monthlyPrices.length; i++) {
                    monthlyPrices[i].style.display = 'none';
                }
                for (var j = 0; j < yearlyPrices.length; j++) {
                    yearlyPrices[j].style.display = 'block';
                }
            } else {
                // Show monthly prices
                for (var i = 0; i < monthlyPrices.length; i++) {
                    monthlyPrices[i].style.display = 'block';
                }
                for (var j = 0; j < yearlyPrices.length; j++) {
                    yearlyPrices[j].style.display = 'none';
                }
            }
        });
    }

    // Add smooth scrolling for anchor links
    var anchorLinks = document.querySelectorAll('a[href^="#"]');
    for (var i = 0; i < anchorLinks.length; i++) {
        anchorLinks[i].addEventListener('click', function (e) {
            e.preventDefault();
            
            var targetId = this.getAttribute('href');
            var targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Fallback for browsers that don't support smooth scrolling
                var targetPosition = targetElement.offsetTop - 70; // Adjust for header height
                window.scrollTo(0, targetPosition);
            }
        });
    }

    // Add animation on scroll
    var animateElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkIfInView() {
        for (var i = 0; i < animateElements.length; i++) {
            var element = animateElements[i];
            var elementTop = element.getBoundingClientRect().top;
            var elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.className += ' visible';
            }
        }
    }
    
    // Initial check
    checkIfInView();
    
    // Check on scroll
    window.addEventListener('scroll', checkIfInView);
});