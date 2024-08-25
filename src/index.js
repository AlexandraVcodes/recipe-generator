function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 5,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let apiKey = "40eebb051ec036c739feeto37ba5f2ee";
  let instructionVariable = document.querySelector("#user-instructions");

  let apiContext =
    "You are a Recipe expert and love to create recipes. Your mission is to create detailed recipe in basic HTML without showing the word html. Limit the instructions to 5 steps. Make sure to follow the user instructions. ";
  let apiPrompt = `User instructions: Generate a recipe about ${instructionVariable.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${apiPrompt}&context=${apiContext}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="blink"> ⌛ Generating a recipe about ${instructionVariable.value}</div>`;

  console.log("Generating recipe");
  console.log(`Prompt: ${apiPrompt}`);
  console.log(`Context: ${apiContext}`);

  axios.get(apiUrl).then(displayRecipe);
}

let formVariable = document.querySelector("#generator-form");
formVariable.addEventListener("submit", generateRecipe);
