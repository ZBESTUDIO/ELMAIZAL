document.documentElement.classList.add("js");
const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();
/* ANIMACIÓN DE SCROLL */
const scrollObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        scrollObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

/* Elementos que ya existen al cargar la página */
document.querySelectorAll(".scroll-animate").forEach((element) => {
  scrollObserver.observe(element);
});

/* Elementos que se crean dinámicamente, como las tarjetas de productos */
const productosGrid = document.querySelector("#productos-grid");

if (productosGrid) {
  const productosObserver = new MutationObserver(() => {
    productosGrid.querySelectorAll(".scroll-animate:not(.visible)").forEach((element) => {
      scrollObserver.observe(element);
    });
  });

  productosObserver.observe(productosGrid, {
    childList: true,
    subtree: true
  });
}
