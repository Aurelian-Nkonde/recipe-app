<template>
  <div class="container mx-auto py-20 lg:py-28">
    <div class="max-w-2xl mx-auto">
      <div class="flex gap-5 mb-6">
        <router-link to="/recipes/update">
          <button
            class="
              font-sans
              text-sm
              bg-yellow-400
              py-2
              px-7
              shadow-xl
              transition
              ease-in-out
              duration-150
              hover:bg-yellow-300
            "
          >
            Update
          </button>
        </router-link>
        <DeleteRecipes />
      </div>
      <div class="grid grid-cols-2">
        <figure>
          <img
            src="../../assets/bg1.jpg"
            alt=""
            class="w-full h-auto mx-auto"
          />
        </figure>
        <div class="py-2 pl-3">
          <h1
            class="
              font-sans-serif
              text-base
              font-bold
              tracking-wide
              border-b-2 border-gray-300
              pb-4
              mb-5
            "
          >
            Name: <span class="font-normal">Nhopi neSoup</span>
          </h1>
          <h1
            class="
              font-sans-serif
              text-base
              font-bold
              tracking-wide
              border-b-2 border-gray-300
              pb-4
              mb-5
            "
          >
            Chef: <span class="font-normal">Thomas Amos</span>
          </h1>
          <h1
            class="
              font-sans-serif
              text-base
              font-bold
              tracking-wide
              border-b-2 border-gray-300
              pb-4
              mb-5
            "
          >
            Ingredients:
            <span class="font-normal">Oil, water, milk, soup, banana</span>
          </h1>
          <h1
            class="
              font-sans-serif
              text-base
              font-bold
              tracking-wide
              border-b-2 border-gray-300
              pb-4
            "
          >
            Summary:
            <span class="font-normal leading-8"
              >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
              reprehenderit fuga eius nesciunt nostrum ipsum dolor consequatur
              hic esse dolore.</span
            >
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DeleteRecipes from "./DeleteRecipes.vue";

export default {
  name: "DetailRecipes",
  components: {
    DeleteRecipes,
  },
};
</script>

<style></style>
