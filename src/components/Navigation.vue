<template>
  <div class="" id="navigation">
    <div class="container mx-auto py-6 flex justify-around items-center">
      <h1 class="font-sans font-bold text-3xl tracking-wider text-yellow-500">
        {{logo}}
      </h1>
      <ul class="flex">
        <router-link to="/">
          <div
            class="
              font-sans
              text-lg text-white
              tracking-wide
              mr-8
              transition
              border-b-2 border-transparent
              ease-in-out
              duration-200
              hover:border-yellow-600
              pb-1
            "
          >
            Home
          </div>
        </router-link>
        <router-link to="/recipes">
          <div
            class="
              font-sans
              text-lg text-white
              tracking-wide
              mr-8
              transition
              border-b-2 border-transparent
              ease-in-out
              duration-200
              hover:border-yellow-600
              pb-1
            "
          >
            Recipes
          </div>
        </router-link>
        <router-link to="/contact">
          <div
            class="
              font-sans
              text-lg text-white
              tracking-wide
              mr-8
              transition
              border-b-2 border-transparent
              ease-in-out
              duration-200
              hover:border-yellow-600
              pb-1
            "
          >
            Contact
          </div>
        </router-link>
        <router-link to="/about">
          <div
            class="
              font-sans
              text-lg text-white
              tracking-wide
              mr-1
              transition
              border-b-2 border-transparent
              ease-in-out
              duration-200
              hover:border-yellow-600
              pb-1
            "
          >
            About
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
// import {mapState} from "vuex"

export default {
  name: "Navigation",
  data: () => {
    return {
      logo: "Recipes_Orgy"
    }
  }
};
</script>

<style>
#navigation {
  background-color: rgb(32, 24, 3);
}
</style>
