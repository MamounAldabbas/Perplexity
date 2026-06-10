document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("ctaBtn");

  button.addEventListener("click", () => {
    button.textContent = "Thanks for clicking!";
  });
});
