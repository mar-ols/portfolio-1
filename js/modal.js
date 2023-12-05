function modal() {
  const imgContainers = document.querySelectorAll(".card-img");

  imgContainers.forEach((imgContainer) => {
    imgContainer.addEventListener("click", () => {
      const modal = imgContainer.querySelector(".modal-container");

      modal.style.display = "block";

      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
}

modal();
