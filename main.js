document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor");
  const follower = document.querySelector(".cursor-follower");
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const reveals = document.querySelectorAll(".reveal");

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let followerX = mouseX;
  let followerY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (cursor) {
      cursor.style.left = mouseX + "px";
      cursor.style.top = mouseY + "px";
    }
  });

  function animate() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    if (follower) {
      follower.style.left = followerX + "px";
      follower.style.top = followerY + "px";
    }
    requestAnimationFrame(animate);
  }
  animate();

  document.querySelectorAll("a, button, input, textarea, .content-card, .stat-card, .feature-card").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      if (follower) {
        follower.style.width = "54px";
        follower.style.height = "54px";
        follower.style.background = "rgba(20,89,65,.08)";
      }
    });
    el.addEventListener("mouseleave", () => {
      if (follower) {
        follower.style.width = "38px";
        follower.style.height = "38px";
        follower.style.background = "transparent";
      }
    });
  });

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.15 });

  reveals.forEach((el) => observer.observe(el));
});
