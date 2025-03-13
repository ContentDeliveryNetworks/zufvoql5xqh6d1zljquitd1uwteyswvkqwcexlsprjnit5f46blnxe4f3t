// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded successfully!');
    
    // Example of adding an event listener
    const heading = document.querySelector('h1');
    if (heading) {
        heading.addEventListener('click', function() {
            alert('Welcome to the website!');
        });
    }

    const notification = document.getElementById('loginNotification');
    const closeBtn = notification.querySelector('.close-btn');
    const photoItems = document.querySelectorAll('.photo-item');

    // Show notification
    function showNotification() {
        notification.classList.add('show');
    }

    // Hide notification
    function hideNotification() {
        notification.classList.remove('show');
    }

    // Photo click handler
    photoItems.forEach(item => {
        item.addEventListener('click', showNotification);
    });

    // Close button handler
    closeBtn.addEventListener('click', hideNotification);

    // Close when clicking outside
    document.addEventListener('click', function(e) {
        if (notification.classList.contains('show')) {
            const isClickInsideNotification = notification.contains(e.target);
            const isClickOnPhoto = Array.from(photoItems).some(item => item.contains(e.target));
            
            if (!isClickInsideNotification && !isClickOnPhoto) {
                hideNotification();
            }
        }
    });
}); 