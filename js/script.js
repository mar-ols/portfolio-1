function toggleSections() {
  document.addEventListener("DOMContentLoaded", () => {
    const toggleBtns = document.querySelectorAll(".section-btn");
    const projectBtn = document.querySelector(".project-btn");
    const aboutBtn = document.querySelector(".about-btn");
    const projectSection = document.querySelector(".left-section");
    const aboutSection = document.querySelector(".right-section");

    aboutSection.style.display = "none";

    toggleBtns.forEach((toggleBtn, index) => {
      toggleBtn.addEventListener("click", () => {
        if (index === 0) {
          projectSection.style.display = "block";
          aboutSection.style.display = "none";
          aboutBtn.style.textDecoration = "line-through";
          projectBtn.style.textDecoration = "underline";
        } else {
          projectSection.style.display = "none";
          aboutSection.style.display = "block";
          aboutBtn.style.textDecoration = "underline";
          projectBtn.style.textDecoration = "line-through";
        }
      });
    });
  });
}

toggleSections();
