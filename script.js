// Navbar Toggle
let menuBtn = document.getElementById("menuBtn");
let navLinks = document.getElementById("navLinks");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// Smooth Scroll Button
let scrollBtn = document.getElementById("scrollBtn");
if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
  });
}

// Popup Logic
let popupOverlay = document.getElementById("popupOverlay");
let openPopup = document.getElementById("openPopup");
let closePopup = document.getElementById("closePopup");

if (openPopup) {
  openPopup.addEventListener("click", () => {
    popupOverlay.classList.add("show");
  });
}

if (closePopup) {
  closePopup.addEventListener("click", () => {
    popupOverlay.classList.remove("show");
  });
}

// Contact Form Popup
let contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    popupOverlay.classList.add("show");
    contactForm.reset();
  });
}

// Close Popup by clicking outside
if (popupOverlay) {
  popupOverlay.addEventListener("click", (e) => {
    if (e.target === popupOverlay) {
      popupOverlay.classList.remove("show");
    }
  });
}

// Scroll Animation
let animatedItems = document.querySelectorAll(".animate");

window.addEventListener("scroll", () => {
  animatedItems.forEach((item) => {
    let position = item.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (position < screenHeight - 80) {
      item.classList.add("show");
    }
  });
});

// Show on Load
window.addEventListener("load", () => {
  animatedItems.forEach((item) => {
    let position = item.getBoundingClientRect().top;
    let screenHeight = window.innerHeight;

    if (position < screenHeight - 80) {
      item.classList.add("show");
    }
  });
});

// Dark / Light Mode
let themeBtn = document.getElementById("themeBtn");

function setTheme(mode) {
  if (mode === "light") {
    document.body.classList.add("light");
    if (themeBtn) themeBtn.innerHTML = "☀️";
  } else {
    document.body.classList.remove("light");
    if (themeBtn) themeBtn.innerHTML = "🌙";
  }
  localStorage.setItem("theme", mode);
}

let savedTheme = localStorage.getItem("theme");
if (savedTheme) setTheme(savedTheme);

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    if (document.body.classList.contains("light")) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  });
}

/* =========================
   LOADER JS
========================= */
window.addEventListener("load", () => {
  let loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.visibility = "hidden";
    }, 1200);
  }
});

/* =========================
   SLIDER JS
========================= */
let slides = document.getElementById("slides");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
let dotsContainer = document.getElementById("dots");

let index = 0;

function updateSlider() {
  if (!slides) return;
  slides.style.transform = `translateX(-${index * 100}%)`;

  // Update dots
  let allDots = document.querySelectorAll(".dot");
  allDots.forEach((dot) => dot.classList.remove("active"));
  if (allDots[index]) allDots[index].classList.add("active");
}

function createDots() {
  if (!dotsContainer || !slides) return;

  let totalSlides = slides.children.length;
  dotsContainer.innerHTML = "";

  for (let i = 0; i < totalSlides; i++) {
    let dot = document.createElement("div");
    dot.classList.add("dot");

    if (i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      index = i;
      updateSlider();
    });

    dotsContainer.appendChild(dot);
  }
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    index--;
    if (index < 0) index = slides.children.length - 1;
    updateSlider();
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    index++;
    if (index > slides.children.length - 1) index = 0;
    updateSlider();
  });
}



// Create dots on load
createDots();

/* =========================
   BACK TO TOP + PROGRESS BAR
========================= */
let topBtn = document.getElementById("topBtn");
let progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {
  // Back to top button show/hide
  if (topBtn) {
    if (window.scrollY > 300) {
      topBtn.style.display = "block";
    } else {
      topBtn.style.display = "none";
    }
  }

  // Progress bar
  if (progressBar) {
    let scrollTop = document.documentElement.scrollTop;
    let scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    let progress = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = progress + "%";
  }
});

// Click = go top
if (topBtn) {
  topBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

/* =========================
   LOGIN POPUP JS
========================= */
let loginBtn = document.getElementById("loginBtn");
let loginOverlay = document.getElementById("loginOverlay");
let closeLogin = document.getElementById("closeLogin");
let loginForm = document.getElementById("loginForm");

if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    loginOverlay.classList.add("show");
  });
}

if (closeLogin) {
  closeLogin.addEventListener("click", () => {
    loginOverlay.classList.remove("show");
  });
}

// Close when clicking outside
if (loginOverlay) {
  loginOverlay.addEventListener("click", (e) => {
    if (e.target === loginOverlay) {
      loginOverlay.classList.remove("show");
    }
  });
}

// Fake Login (demo)
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Login Successful 😄 (Demo)");
    loginOverlay.classList.remove("show");
    loginForm.reset();
  });
}

/* =========================
   TYPING TEXT
========================= */
let typingText = document.getElementById("typing");
let words = ["Talha 🥰", "Java Script 😎", "Web Developer 😈", "React.js 😍"];
let wordIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (!typingText) return;

  if (charIndex < words[wordIndex].length) {
    typingText.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 120);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 80);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 400);
  }
}

typeEffect();


/* FAQ Toggle */
document.querySelectorAll(".faq-item").forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

/* =========================
   GALLERY POPUP VIEWER
========================= */
let galleryImages = document.querySelectorAll(".gallery-img");
let imgPopup = document.getElementById("imgPopup");
let popupImage = document.getElementById("popupImage");
let closeImgPopup = document.getElementById("closeImgPopup");

galleryImages.forEach((img) => {
  img.addEventListener("click", () => {
    if (imgPopup && popupImage) {
      popupImage.src = img.src;
      imgPopup.classList.add("show");
    }
  });
});

if (closeImgPopup) {
  closeImgPopup.addEventListener("click", () => {
    imgPopup.classList.remove("show");
  });
}

if (imgPopup) {
  imgPopup.addEventListener("click", (e) => {
    if (e.target === imgPopup) {
      imgPopup.classList.remove("show");
    }
  });
}


/* =========================
   ABOUT PAGE COUNTER
========================= */
let counters = document.querySelectorAll(".count");

counters.forEach((counter) => {
  let target = +counter.getAttribute("data-target");
  let speed = 40;

  let updateCount = () => {
    let current = +counter.innerText;
    let increment = Math.ceil(target / speed);

    if (current < target) {
      counter.innerText = current + increment;
      setTimeout(updateCount, 60);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});
