// Set global storage (localStorage) object
// Read items
// Create item
// Delete Item

export function getRecipes() {
  const recipes = localStorage.getItem("recipes");
  return recipes ? JSON.parse(recipes) : [];
}

export function createRecipe(e) {
  const recipes = getRecipes();
  const recipe = e.target;

  console.log("recipe", recipe);

  if (checkRecipeExists(recipe.name)) {
    console.error(`Recipe with name "${recipe.name}" already exists.`);
    return;
  }

  recipes.push(recipe);
  localStorage.setItem("recipes", JSON.stringify(recipes));
}

export function checkRecipeExists(name) {
  const recipes = getRecipes();
  return recipes.some((recipe) => recipe.name === name);
}
