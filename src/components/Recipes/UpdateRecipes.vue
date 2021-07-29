<template>
  <div class="container mx-auto py-20 lg:py-28">
    <div class="max-w-sm mx-auto">
      <h1 class="font-sans text-3xl pt-5 pb-3 text-center">Update Recipe</h1>
      <form action="" @submit.prevent="updateRecipe">
        <div class="py-2">
          <label>Name</label>
          <input
            type="text"
            class="
              bg-gray-200
              px-3
              w-full
              py-2
              rounded-lg
              outline-none
              shadow-xl
            "
          />
        </div>
        <div class="py-2">
          <label>Chef</label>
          <input
            type="text"
            class="
              bg-gray-200
              px-3
              w-full
              py-2
              rounded-lg
              outline-none
              shadow-xl
            "
          />
        </div>
        <div class="py-2">
          <label>Ingredients</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            class="
              bg-gray-200
              px-3
              w-full
              py-2
              rounded-lg
              outline-none
              shadow-xl
            "
          ></textarea>
        </div>
        <div class="py-2">
          <label>Summary</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            class="
              bg-gray-200
              px-3
              w-full
              py-2
              rounded-lg
              outline-none
              shadow-xl
            "
          ></textarea>
        </div>
        <div class="py-2">
          <label>Image</label>
          <input type="file" />
        </div>
        <button
          class="mt-4 bg-black text-white py-3 w-full shadow-xl outline-none"
        >
          Add
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpdateRecipes",
  methods: {
    updateRecipe() {
      alert("this is update method");
    },
  },
};
</script>

<style></style>
