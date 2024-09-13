document.addEventListener('DOMContentLoaded', function () {
    // Get all slides
    const slides = document.querySelectorAll('.slide');
    console.log(slides.length);

    // Show the first slide initially
    if (slides.length > 0) {
        slides[0].classList.add('active');
    }

    // Optional: Add automatic slideshow logic
    let currentSlide = 0;

    function showNextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    // Automatically change slides every 5 seconds
    setInterval(showNextSlide, 5000);
});

// Function to filter disaster information based on the selected category
function filterData(category) {
    const allItems = document.querySelectorAll('.update-item');

    allItems.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

// Example function to populate latest disaster updates (for demonstration)
function populateUpdates() {
    const dataGrid = document.getElementById('data-grid');

    const updates = [
        { title: 'Flood in Region A', description: 'Heavy rains have caused flooding in Region A. Emergency services are on high alert.', category: 'flood' },
        { title: 'Earthquake in City B', description: 'An earthquake of magnitude 6.2 hit City B. Aftershocks are expected.', category: 'earthquake' },
        { title: 'Wildfire in Forest C', description: 'A wildfire is spreading in Forest C. Evacuation orders are in place.', category: 'wildfire' },
        { title: 'Pandemic Update', description: 'New guidelines issued for pandemic management. Stay updated for safety measures.', category: 'pandemic' }
    ];

    // dataGrid.innerHTML = '';

    updates.forEach(update => {
        const updateItem = document.createElement('div');
        updateItem.className = `update-item ${update.category}`;
        updateItem.innerHTML = `
            <h4>${update.title}</h4>
            <p>${update.description}</p>
        `;
        dataGrid.appendChild(updateItem);
    });
}

document.addEventListener('DOMContentLoaded', populateUpdates);

// Form validation for contact page
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (name && email && message) {
                alert('Your message has been sent!');
                form.reset();
            } else {
                alert('Please fill out all fields.');
            }
        });
    }
});
