window.addEventListener("load", () => {
  const name = document.getElementById("name");
  const button = document.getElementById("submit");

  button.addEventListener("click", () => {
    const nameInput = document.getElementById("name-input");
    name.innerText = nameInput.value;
  });
});
