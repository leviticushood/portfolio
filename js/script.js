// This script handles the fade-in animation for page content
// and sets the active state for navigation links.

document.addEventListener('DOMContentLoaded', () => {
    // --- Fade-in effect for page content ---
    const pageContent = document.getElementById('page-content');
    if (pageContent) {
        // Ensure initial state is hidden for JS-enabled browsers,
        // then trigger the fade-in.
        // The 'opacity-0' class is set inline in the HTML.
        // We remove it to trigger Tailwind's transition.
        setTimeout(() => {
            pageContent.classList.remove('opacity-0');
            pageContent.classList.add('opacity-100'); // Ensure it becomes fully visible
        }, 50); // A small delay can help ensure styles are applied before transition starts
    }

    // --- Active navigation link highlighting ---
    const navLinks = document.querySelectorAll('nav a.nav-link');
    // Get the current page name (e.g., "index.html", "about.html")
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop() || 'index.html';
        if (linkPage === currentPage) {
            // Add active classes
            link.classList.add('bg-indigo-100', 'text-indigo-700', 'font-semibold');
            // Remove default hover/non-active classes
            link.classList.remove('text-gray-500', 'hover:text-gray-900');
        } else {
            // Ensure non-active links have the default styling
            link.classList.add('text-gray-500', 'hover:text-gray-900');
            link.classList.remove('bg-indigo-100', 'text-indigo-700', 'font-semibold');
        }
    });

    // --- Smooth scroll for any anchor links (optional) ---
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //     anchor.addEventListener('click', function (e) {
    //         e.preventDefault();
    //         const targetId = this.getAttribute('href');
    //         const targetElement = document.querySelector(targetId);
    //         if (targetElement) {
    //             targetElement.scrollIntoView({
    //                 behavior: 'smooth'
    //             });
    //         }
    //     });
    // });

    // --- Contact Form Submission (Placeholder) ---
    // You would typically handle form submission with a backend service or a service like Formspree.
    const contactForm = document.querySelector('form');
    if (contactForm && window.location.pathname.includes('contact.html')) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent default form submission
            // Basic validation example
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Here you would typically send the data to a server
            // For demonstration, we'll just log it and show an alert.
            console.log('Form submitted:', { name, email, message });
            alert('Thank you for your message! (This is a demo - no email was sent)');
            contactForm.reset(); // Reset the form
        });
    }
});
