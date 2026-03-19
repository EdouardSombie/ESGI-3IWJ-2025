// code js du compoant button
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("button")) {
    console.log(e.target);
  }
});
