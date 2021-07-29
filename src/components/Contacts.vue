<template>
  <div class="">
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
          Contact us!
        </h1>
        <div class="max-w-lg mx-auto">
          <form action="">
            <div class="py-2">
              <label>Name</label>
              <input
                type="text"
                class="
                  w-full
                  py-2
                  px-4
                  shadow-xl
                  rounded-xl
                  bg-yellow-200
                  outline-none
                "
              />
            </div>
            <div class="py-2">
              <label>email</label>
              <input
                type="email"
                class="
                  w-full
                  py-2
                  px-4
                  shadow-xl
                  rounded-xl
                  bg-yellow-200
                  outline-none
                "
              />
            </div>
            <div class="py-2">
              <label>Message</label>
              <textarea
                name=""
                class="
                  w-full
                  py-2
                  px-4
                  shadow-xl
                  rounded-xl
                  bg-yellow-200
                  outline-none
                "
                id=""
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <div class="mt-5">
              <button class="bg-black text-white py-4 w-full">
                send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contacts",
};
</script>

<style></style>
