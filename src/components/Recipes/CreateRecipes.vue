<template>
  <div class="container mx-auto py-20 lg:py-28">
    <div class="max-w-sm mx-auto">
      <h1 class="font-sans text-3xl pt-5 pb-3 text-center">Add a Recipe</h1>
      <form action="" @submit.prevent="addRecipe">
        <div class="py-2">
          <label>Name</label>
          <input
            v-model="name"
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
            v-model="chef"
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
            v-model="ingredients"
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
            v-model="summary"
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
  name: "CreateRecipes",
  data: () => {
    return {
      name: "",
      chef: "",
      ingredients: "",
      summary: ""
    }
  },
  methods: {
    addRecipe(){
      if(this.name.length && this.chef.length && this.ingredients.length && this.summary.length >= 1){
        this.$store.dispatch("addRecipe", {
          name: this.name,
          chef: this.chef,
          ingredients: this.ingredients,
          summary: this.summary
        });
        this.name = "";
        this.chef = "";
        this.summary = "";
        this.ingredients = ""

      } else {
        alert("Ooops")
      }
    }
  }
};
</script>

<style></style>
