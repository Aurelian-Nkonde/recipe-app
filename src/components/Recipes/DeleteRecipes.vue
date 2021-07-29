<template>
  <div class="">
    <button
      @click.prevent="deleteRecipe"
      class="
        font-sans
        text-sm
        bg-red-400
        py-2
        px-7
        mr-6
        shadow-xl
        transition
        ease-in-out
        duration-150
        hover:bg-red-300
      "
    >
      Delete
    </button>
  </div>
</template>

<script>
export default {
  name: "DeleteRecipes",
  data: () => {
    return {
      id: 0,
    }
  },
  methods: {
    deleteRecipe() {
      this.$store.dispatch("deleteRecipe", this.id)
    },
  },
};
</script>

<style></style>
