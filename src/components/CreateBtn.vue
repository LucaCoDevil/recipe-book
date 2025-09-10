<script setup>
import { createRecipe } from "../js/utils.js";
// Busy creating recipe from form
</script>

<template>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#staticBackdrop"
  >
    Launch static backdrop modal
  </button>

  <!-- Modal -->
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <form class="row g-3" @submit.prevent="createRecipe">
            <div class="col-12">
              <label for="inputName" class="form-label">Recipe Name</label>
              <input
                type="text"
                class="form-control"
                id="inputName"
                required
                placeholder="Spaghetti Carbonara"
              />
            </div>
            <div class="col-12">
              <label for="inputDescription" class="form-label"
                >Recipe Description</label
              >
              <input
                type="text"
                class="form-control"
                required
                id="inputDescription"
                placeholder="A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper."
              />
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
