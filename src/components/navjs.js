const side = document.querySelector("aside");
export const nav = document
  .getElementById("navBtn")
  ?.addEventListener("click", () => {
    side?.classList.contains("hidden")
      ? (side?.classList.remove("hidden"),
        side?.animate({ opacity: [0, 1] }, { duration: 400 }))
      : (side?.animate({ opacity: 0 }, { duration: 400 }),
        setTimeout(() => {
          side?.classList.add("hidden");
        }, 400));
  });
