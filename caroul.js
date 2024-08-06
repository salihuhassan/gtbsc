document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll(".carousel-item");
    const carouselIndicatorsContainer = document.querySelector(".carousel-indicators");

    // Create indicators based on number of slides
    carouselItems.forEach((item, index) => {
        const indicator = document.createElement("div");
        indicator.classList.add("carousel-indicator");
        if (index === 0) {
            indicator.classList.add("active");
        }
        carouselIndicatorsContainer.appendChild(indicator);

        // Add click event to each indicator
        indicator.addEventListener("click", () => {
            // Remove active class from all indicators
            document.querySelectorAll(".carousel-indicator").forEach(indicator => {
                indicator.classList.remove("active");
            });

            // Add active class to the clicked indicator
            indicator.classList.add("active");

            // Move carousel slide to the corresponding index
            const slideWidth = carouselItems[0].clientWidth;
            const offset = index * slideWidth;
            document.querySelector(".carousel-slide").style.transform = `translateX(-${offset}px)`;
        });
    });
});








document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('#scrollspy-nav a');
  
    window.addEventListener('scroll', function() {
        let fromTop = window.scrollY + 50;
  
        navLinks.forEach(link => {
            let section = document.querySelector(link.hash);
  
            if (section.offsetTop <= fromTop &&
                section.offsetTop + section.offsetHeight > fromTop) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
  });