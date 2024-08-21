function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "This will be a gread salad!",
    autoStart: true,
    delay: 5,
    cursor: "",
  });
}

let formVariable = document.querySelector("#generator-form");
formVariable.addEventListener("submit", generateRecipe);
