document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Active link highlighting based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        // Normalize href to compare with currentPage
        let linkPage = link.getAttribute('href').split('/').pop();
        if (linkPage === '' && link.getAttribute('href').endsWith('/')) {
            linkPage = 'index.html'; // Case for root path like './' or '/'
        }
        if (linkPage === './') {
            linkPage = 'index.html';
        }

        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active'); // Ensure other links are not active
        }
    });

    // Special handling for the homepage if it's just 'index.html' or empty path
    if (currentPage === 'index.html' || currentPage === '') {
        const homeLink = document.querySelector('nav ul li a[href="index.html"], nav ul li a[href="./"]');
        if (homeLink && !homeLink.classList.contains('active')) {
             // Remove active from all first
            navLinks.forEach(l => l.classList.remove('active'));
            homeLink.classList.add('active');
        }
    }
});
