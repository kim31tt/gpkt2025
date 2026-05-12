const revealItems = document.querySelectorAll(".reveal");

revealItems.forEach((item, index) => {
  setTimeout(() => {
    item.classList.add("is-visible");
  }, 120 * index);
});

const countryCards = document.querySelectorAll(".country-card");

countryCards.forEach((card) => {
  card.addEventListener("click", () => {
    const isOpen = card.classList.contains("is-open");

    countryCards.forEach((item) => {
      item.classList.remove("is-open");
    });

    if (!isOpen) {
      card.classList.add("is-open");
    }
  });
});

const profile = document.querySelector(".js-tilt");

if (profile && window.matchMedia("(pointer: fine)").matches) {
  profile.addEventListener("mousemove", (event) => {
    const rect = profile.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 3.5;
    const rotateX = ((y / rect.height) - 0.5) * -3.5;

    profile.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  profile.addEventListener("mouseleave", () => {
    profile.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
}
