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
          aboutBtn.style.borderBottom = "1px solid black";
          projectBtn.style.borderBottom = "none";
          aboutBtn.style.backgroundColor = "#b69761";
          projectBtn.style.backgroundColor = "#f3cc87";
        } else {
          projectSection.style.display = "none";
          aboutSection.style.display = "block";
          projectBtn.style.borderBottom = "1px solid black";
          aboutBtn.style.borderBottom = "none";
          projectBtn.style.backgroundColor = "#b69761";
          aboutBtn.style.backgroundColor = "#f3cc87";
        }
      });
    });
  });
}

toggleSections();
