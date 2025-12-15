document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", function (e) {
    console.log("Link clicado: " + this.href);
  });
});
