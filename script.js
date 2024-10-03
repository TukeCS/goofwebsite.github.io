document
  .getElementById("clickable-image")
  .addEventListener("click", function (e) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤️";
    document.body.appendChild(heart);

    // Position the heart near the mouse click
    heart.style.left = `${e.clientX - 20}px`;
    heart.style.top = `${e.clientY - 20}px`;

    // Remove the heart after animation
    setTimeout(() => heart.remove(), 1000);
  });
