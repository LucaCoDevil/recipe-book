<script setup>
import Card from "../components/Card.vue";
import { Recipe } from "../js/constants.js";
import { getRecipes, createRecipe, checkRecipeExists } from "../js/utils.js";

const recipes = [
  new Recipe(
    "Spaghetti Carbonara",
    "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    ["spaghetti", "eggs", "cheese", "pancetta", "pepper"],
    "Cook spaghetti. In a bowl, mix eggs and cheese. Fry pancetta. Combine all with pepper."
  ),
  new Recipe(
    "Chicken Curry",
    "A spicy and flavorful dish made with chicken, spices, and coconut milk.",
    ["chicken", "curry powder", "coconut milk", "onion", "garlic"],
    "Sauté onion and garlic. Add chicken and curry powder. Pour in coconut milk and simmer."
  ),
  new Recipe(
    "Vegetable Stir Fry",
    "A quick and healthy dish with mixed vegetables stir-fried in soy sauce.",
    ["mixed vegetables", "soy sauce", "ginger", "garlic"],
    "Heat oil, add ginger and garlic, then stir-fry vegetables with soy sauce."
  ),
];

recipes.forEach((recipe) => {
  const recipeExisting = checkRecipeExists(recipe.name);

  if (!recipeExisting) {
    createRecipe(recipe);
  }
});
</script>

<template>
  <div class="listing-page">
    <h1>Recipe Listing</h1>
    <div class="row">
      <div
        v-for="(item, key) in getRecipes()"
        class="recipe-card col-12 col-md-6 col-lg-4 mb-4"
        :key="key"
      >
        <Card
          :key="key"
          :name="item.name"
          :description="item.description"
          :ingredients="item.ingredients"
          :instructions="item.instructions"
        />
      </div>
    </div>
  </div>
</template>
