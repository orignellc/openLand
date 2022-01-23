<template>
  <div class="bg-white text-black text-xl leading-6 flex items-center shadow-bottom">
    <div
      class="
        max-w-6xl
        px-4
        py-4
        w-full
        flex
        items-center
        mx-auto
        flex-wrap
      "
    >
      <nuxt-link to="/">
        <logo class="h-7" />
      </nuxt-link>

      <div class="flex ml-auto md:ml-6 md:order-3">
        <a
          target="_blank"
          class="
            bg-green-650 hover:bg-green-600
            text-white
            rounded-3xl
            px-3
            md:px-7
            py-1
            md:py-3
            mr-4
            md:mr-0
            flex
            items-center
          "
        >
          <span class="text-xs lg:text-sm ">Connect Wallet</span>
        </a>

        <button class="md:hidden" @click="showMobileNav = !showMobileNav">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <div
        class="
          md:block
          ml-0
          md:ml-auto
          py-6
          md:py-0
          text-base
          lg:text-md
          w-full
          md:w-auto
          flex flex-col
          md:flex-row

        "
        :class="{ hidden: showMobileNav }"
      >
        <nuxt-link to="/#features" class="mr-3 lg:mx-3 lg:mx-6 my-3 hover:text-green-600">
          <span>Features</span>
        </nuxt-link>

        <nuxt-link to="/#how-it-works" class="mr-3 lg:mx-3 lg:mx-6 my-3 hover:text-green-600">
          <span>How It works</span>
        </nuxt-link>

        <nuxt-link to="/#properties" class="mr-3 lg:mx-3 lg:mx-6 my-3 hover:text-green-600">
          <span>Properties</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      showMobileNav: true,
    }
  },
}
</script>

<style scoped>
.shadow-bottom {
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
}
</style>
