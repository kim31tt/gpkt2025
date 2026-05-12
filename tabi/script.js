const revealItems = document.querySelectorAll(".reveal");

revealItems.forEach((item, index) => {
  setTimeout(() => {
    item.classList.add("is-visible");
  }, 110 * index);
});

const countryCards = document.querySelectorAll(".country-card");

countryCards.forEach((card) => {
  card.addEventListener("click", () => {

    const grid = card.parentElement;
    const isOpen = card.classList.contains("is-open");

    countryCards.forEach((item) => {
      item.classList.remove("is-open");
    });

    if (!isOpen) {
      card.classList.add("is-open");

      grid.prepend(card);

      card.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }
  });
});

const shell = document.querySelector(".js-tilt");

if (shell && window.matchMedia("(pointer: fine)").matches) {
  shell.addEventListener("mousemove", (event) => {
    const rect = shell.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 2.4;
    const rotateX = ((y / rect.height) - 0.5) * -2.4;

    shell.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  shell.addEventListener("mouseleave", () => {
    shell.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
}
