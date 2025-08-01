<script setup>
const props = defineProps({
  name: {
    type: String,
    default: "Recipe Name",
  },
  description: {
    type: String,
    default: "Recipe Description",
  },
  ingredients: {
    type: Array,
    default: () => [],
  },
  instructions: {
    type: String,
    default: "Recipe Instructions",
  },
});
</script>

<template>
  <div class="card">
    <h2>{{ name }}</h2>
    <p class="description">{{ description }}</p>
    <div class="ingredients">
      <h3>Ingredients</h3>
      <ul>
        <li v-for="(ingredient, idx) in ingredients" :key="idx">
          {{ ingredient }}
        </li>
      </ul>
    </div>
    <div class="instructions">
      <h3>Instructions</h3>
      <p>{{ instructions }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  background-color: transparent;
}
.description {
  color: #666;
  margin-bottom: 12px;
}
.ingredients,
.instructions {
  margin-bottom: 12px;
}
.ingredients ul {
  padding-left: 20px;
}
</style>
