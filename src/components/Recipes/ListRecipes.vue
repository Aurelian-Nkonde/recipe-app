<template>
  <div class="container mx-auto py-20 lg:py-28">
    <div class="max-w-4xl mx-auto">
      <router-link to="/create/recipes">
        <button
          class="
            font-sans
            text-lg
            bg-yellow-300
            py-3
            px-10
            shadow-xl
            transition
            ease-linear
            duration-200
            hover:bg-yellow-200
          "
        >
          Add Recipe
        </button>
      </router-link>


      <div class="py-10">
        <h1
          v-if="recipesLength >= 1"
          class="font-sans text-black text-lg font-bold"
        >
          {{ recipesLength }} Recipes available
        </h1>
        <h1 v-else class="font-sans text-lg text-red-600">
          Oops, {{ recipesLength }}
        </h1>
      </div>

      <div class="" v-if="recipesLength >= 1">
        <div class="grid grid-cols-4 gap-6">
          <div class="" v-for="recipe in recipes" :key="recipe.id">
            <div class="flex flex-col justify-center shadow-xl">
              <figure>
                <img src="../../assets/bg1.jpg" alt="" class="h-60 w-full" />
              </figure>
              <div class="py-4 px-3 pb-7">
                <h1 class="font-sans text-2xl pb-1">{{ recipe.name }}</h1>
                <h2 class="font-sans-serif text-lg">{{ recipe.chef }}</h2>
                <div class="mt-4">
                  <router-link to="/recipes/detail">
                    <a
                      href="#"
                      class="
                        font-sans
                        bg-yellow-500
                        py-3
                        px-8
                        transition
                        ease-linear
                        duration-200
                        hover:bg-yellow-600
                      "
                      >View More</a
                    >
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="" v-else>
        <p class="font-sans text-4xl text-red-500 tracking-wide">
          No recipes in database..
        </p>
      </div>
    </div>
  </div>
</template>

<script>
// import {mapState} from "vuex"
import {mapGetters} from "vuex"

export default {
  name: "ListRecipes",
  computed: {
    recipesLength() {
      return this.recipes.length;
    },

    ...mapGetters([
      'recipes'
    ])
  },
};
</script>

<style></style>
