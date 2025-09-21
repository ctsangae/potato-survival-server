window.addEventListener("scroll", function () {
  const overlay = document.querySelector(".overlay-text-background");
  const scrollPosition = window.scrollY; // Current scroll position
  const windowHeight = window.innerHeight; // Height of the viewport
  const overlayPosition = overlay.getBoundingClientRect().top + scrollPosition; // Position of the overlay

  // Calculate the distance from the overlay to the top of the viewport
  const distanceFromTop = overlayPosition - scrollPosition;

  // Calculate opacity based on scroll position
  if (distanceFromTop < windowHeight && distanceFromTop > 0) {
    const opacity = (distanceFromTop / windowHeight) * -0.35 + 0.35; // Adjust opacity
    overlay.style.background = `rgba(255, 255, 255, ${opacity})`;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("myVideo");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        video.play(); // Play the video when in view
      } else {
        video.pause(); // Pause the video when out of view (optional)
      }
    });
  });

  observer.observe(video); // Start observing the video
});
