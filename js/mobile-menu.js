document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.mobile-menu-button');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.menu-overlay');
    let menuOpen = false;

    function toggleMenu(event) {
        if (event) {
            event.stopPropagation();
        }
        menuOpen = !menuOpen;
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        menuButton.innerHTML = menuOpen ? '×' : '☰';
    }

    // Toggle menu when clicking the menu button
    menuButton.addEventListener('click', toggleMenu);

    // Close menu when clicking the overlay
    overlay.addEventListener('click', toggleMenu);

    // Prevent clicks inside sidebar from closing menu
    sidebar.addEventListener('click', function(e) {
        e.stopPropagation();
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768 && menuOpen) {
            toggleMenu();
        }
    });
});
