// Gallery 1
const images1 = document.querySelectorAll("#images1 img");
const description1 = document.getElementById("description1");
const prevButton1 = document.getElementById("prev1");
const nextButton1 = document.getElementById("next1");

let currentIndex1 = 0;
const descriptions1 = [
  "<h3>Guardian farm</h3>",
  "<h3>Mob & Creaper farm</h3>",
  "<h3>Raid farm</h3>",
  "<h3>Lava farm</h3>",
  "<h3>Piglin bartering farm</h3>",
  "<h3>Sugar & Bamboo farm</h3>",
  "<h3>Shulker farm</h3>",
  "<h3>Drown farm</h3>",
  "<h3>Gold farm</h3>",
  "<h3>Enderman exp farm</h3>",
];

function updateGallery1() {
  images1.forEach((img, index) => {
    if (index === currentIndex1) {
      img.classList.add("active");
      description1.innerHTML = descriptions1[index];
    } else {
      img.classList.remove("active");
    }
  });
}

function nextImage1() {
  currentIndex1 = (currentIndex1 + 1) % images1.length;
  updateGallery1();
}

prevButton1.addEventListener("click", () => {
  currentIndex1 = currentIndex1 === 0 ? images1.length - 1 : currentIndex1 - 1;
  updateGallery1();
});

nextButton1.addEventListener("click", nextImage1);

// Scroll functionality for Gallery 1
document.getElementById("gallery1").addEventListener("wheel", (event) => {
  event.preventDefault();
  if (event.deltaY < 0) {
    currentIndex1 =
      currentIndex1 === 0 ? images1.length - 1 : currentIndex1 - 1;
  } else {
    currentIndex1 = (currentIndex1 + 1) % images1.length;
  }
  updateGallery1();
});

// Auto transition every 5 seconds for Gallery 1
setInterval(nextImage1, 8000);

// Initialize first gallery
updateGallery1();

// Gallery 2
const images2 = document.querySelectorAll("#images2 img");
const description2 = document.getElementById("description2");
const prevButton2 = document.getElementById("prev2");
const nextButton2 = document.getElementById("next2");

let currentIndex2 = 0;
const descriptions2 = [
  "<h3>The starter house of Potatomaster</h3><br><br>Just a humble house :)",
  "<h3>Micc's Sword Base</h3>",
  "<h3>Mrf1shst1ck's Pirate Ship</h3><br>Full of eggs!!",
  "<h3>The Potato's Mansion</h3><br><br>A breathtaking architectural masterpiece.",
];

function updateGallery2() {
  images2.forEach((img, index) => {
    if (index === currentIndex2) {
      img.classList.add("active");
      description2.innerHTML = descriptions2[index];
    } else {
      img.classList.remove("active");
    }
  });
}

function nextImage2() {
  currentIndex2 = (currentIndex2 + 1) % images2.length;
  updateGallery2();
}

prevButton2.addEventListener("click", () => {
  currentIndex2 = currentIndex2 === 0 ? images2.length - 1 : currentIndex2 - 1;
  updateGallery2();
});

nextButton2.addEventListener("click", nextImage2);

// Scroll functionality for Gallery 2
document.getElementById("gallery2").addEventListener("wheel", (event) => {
  event.preventDefault();
  if (event.deltaY < 0) {
    currentIndex2 =
      currentIndex2 === 0 ? images2.length - 1 : currentIndex2 - 1;
  } else {
    currentIndex2 = (currentIndex2 + 1) % images2.length;
  }
  updateGallery2();
});

// Auto transition every 5 seconds for Gallery 2
setInterval(nextImage2, 8000);

// Initialize second gallery
updateGallery2();

//carousel //carousel
const carouselContainer = document.getElementById("carouselContainer");
let animationDuration = 100; // Initial animation duration
let resetTimeout;

carouselContainer.addEventListener("wheel", (e) => {
  e.preventDefault(); // Prevent default scroll behavior

  // Modify the animation duration based on scroll amount
  const scrollAmount = e.deltaY;
  const speedFactor = 0.05; // Adjust this factor to control sensitivity
  animationDuration = Math.max(
    10,
    animationDuration - scrollAmount * speedFactor
  ); // Minimum duration of 5s

  carouselContainer.style.animation = `scroll ${animationDuration}s linear infinite`;

  // Clear the previous timeout if any
  clearTimeout(resetTimeout);

  // Automatically reset the speed after 2 seconds of no scrolling
  resetTimeout = setTimeout(() => {
    animationDuration = 100; // Reset back to original duration
    carouselContainer.style.animation = `scroll ${animationDuration}s linear infinite`;
  }, 2000); // Adjust this duration as needed
});
