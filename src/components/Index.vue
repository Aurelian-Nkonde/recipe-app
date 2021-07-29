<template>
  <div class="">
    <!-- showcasing -->
    <div class="bg-green-300 flex items-center" id="showcasing">
      <div class="container mx-auto">
        <div class="max-w-4xl mx-auto flex flex-col">
          <h1 class="font-sans text-6xl pb-4 text-yellow-500 font-bold">
            Ooh its <span>Recipes_Orgy</span>
          </h1>
          <div class="border-l-2 border-white pl-3 my-6">
            <p class="font-sans text-xl text-green-50">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem.
            </p>
            <p class="font-sans text-xl text-green-50">
              dolor, sit amet consectetur adipisicing elit. Autem.
            </p>
          </div>
          <div class="py-6">
            <router-link to="/recipes">
              <a
                href="#"
                id="header-btn"
                class="
                  font-sans
                  text-lg
                  tracking-wide
                  bg-yellow-500
                  py-5
                  px-10
                  transition
                  ease-in-out
                  duration-200
                  hover:bg-yellow-400
                "
                >View Recipes</a
              >
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- about us -->
    <div class="container mx-auto py-28">
      <div class="max-w-4xl mx-auto">
        <h1 class="font-sans text-center text-4xl tracking-wide pb-16">
          About Our Services!
        </h1>
        <div class="grid grid-cols-3 gap-4">
          <div
            class="
              py-10
              px-10
              flex flex-col
              shadow-xl
              items-center
              bg-gray-200
              transition
              ease-in-out
              duration-200
              hover:bg-gray-100
            "
          >
            <h1 class="font-sans-serif text-2xl pb-4">Sharing Ideas</h1>
            <p class="font-sans-serif text-base text-gray-600 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque commodi ipsam neque officiis dicta qui eum, excepturi
              perspiciatis illum a?
            </p>
          </div>
          <div
            class="
              py-10
              px-10
              flex flex-col
              shadow-xl
              items-center
              bg-gray-200
              transition
              ease-in-out
              duration-200
              hover:bg-gray-100
            "
          >
            <h1 class="font-sans-serif text-2xl pb-4">Cooking Passion</h1>
            <p class="font-sans-serif text-base text-gray-600 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing e ipsam neque
              officiis dicta qui eum, excepturi perspiciatis illum a?
            </p>
          </div>
          <div
            class="
              py-10
              px-10
              flex flex-col
              shadow-xl
              items-center
              bg-gray-200
              transition
              ease-in-out
              duration-200
              hover:bg-gray-100
            "
          >
            <h1 class="font-sans-serif text-2xl pb-4">Connections</h1>
            <p class="font-sans-serif text-base text-gray-600 text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloremque commodi ipsam neque officiis dicta qui eum, excepturi
              perspiciatis illum a?
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- our goals -->
    <div class="bg-gray-300">
      <div class="container mx-auto py-28">
        <div class="max-w-4xl mx-auto">
          <h1
            class="
              font-sans
              text-center text-4xl
              tracking-wide
              pb-8
              text-gray-700
            "
          >
            Our Goal!
          </h1>
          <div class="max-w-lg mx-auto">
            <p class="font-sans text-base text-gray-800 leading-8 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              deleniti! Doloremque veritatis voluptates iste animi illum,
              expedita aspernatur modi maxime molestiae et.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- meet the team -->
    <div class="bg-gray-800">
      <div class="container mx-auto py-28">
        <div class="max-w-4xl mx-auto">
          <h1
            class="
              font-sans
              text-center text-4xl
              tracking-wide
              pb-16
              text-white
            "
          >
            The team behind this Goal!
          </h1>
          <div class="grid grid-cols-3 gap-12">
            <div class="flex flex-col border-b-2 border-gray-600">
              <figure>
                <img src="../assets/team1.jpeg" alt="" class="h-60 w-full" />
              </figure>
              <div class="py-3 text-center">
                <h2 class="font-sans-serif text-xl text-white pb-1">
                  James Amos
                </h2>
                <p class="font-sans-serif text-base text-white pb-1">
                  james@gmail.com
                </p>
                <p class="font-sans-serif text-base text-white pb-4">
                  Oslo, Sweeden
                </p>
              </div>
            </div>
            <div class="flex flex-col border-b-2 border-gray-600">
              <figure>
                <img src="../assets/team2.jpeg" alt="" class="h-60 w-full" />
              </figure>
              <div class="py-3 text-center">
                <h2 class="font-sans-serif text-xl text-white pb-1">
                  Thomas Hills
                </h2>
                <p class="font-sans-serif text-base text-white pb-1">
                  hills@gmail.com
                </p>
                <p class="font-sans-serif text-base text-white pb-4">
                  Ontario, Canada
                </p>
              </div>
            </div>
            <div class="flex flex-col border-b-2 border-gray-600">
              <figure>
                <img src="../assets/team3.jpeg" alt="" class="h-60 w-full" />
              </figure>
              <div class="py-3 text-center">
                <h2 class="font-sans-serif text-xl text-white pb-1">
                  Aaron Rivers
                </h2>
                <p class="font-sans-serif text-base text-white pb-1">
                  rivers@gmail.com
                </p>
                <p class="font-sans-serif text-base text-white pb-4">
                  Harare, Zimbabwe
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
};
</script>

<style>
#showcasing {
  height: 85vh;
  background: url("../assets/bg1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
