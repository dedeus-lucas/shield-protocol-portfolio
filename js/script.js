const navbarWrapper = document.querySelector(".navbar-wrapper");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbarWrapper.classList.add("navbar-scrolled");
  } else {
    navbarWrapper.classList.remove("navbar-scrolled");
  }
});

const sections = document.querySelectorAll("section[id]");

const navLinks = document.querySelectorAll(".navbar-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 140;

    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
