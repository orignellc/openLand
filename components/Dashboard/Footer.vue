<template>
  <div class="bg-green-950">
    <div
      class="
        max-w-6xl
        px-4
        py-16
        md:py-24
        w-full
        flex flex-col
        items-center
        justify-center
        mx-auto
      "
    >

      <div class="grid md:grid-cols-2 w-5/6 gap-10">
        <div class="">
          <logo class="h-8 mb-5" color="#fff"/>
          <p class="text-white text-base">We enhance value of bare lands in the <br>Real Estate Industry</p>
        </div>
        <div class="flex justify-end opacity-60">
          <a v-for="social in socials">
            <img :src="social.icon" alt="twitter" class="h-10 ml-4">
          </a>
        </div>
        <div class="col-span-2 border-t border-opacity-40 border-white pt-5">
          <p class="text-sm text-white">
            Copyright © OpenLand 2022. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardFooter",
  data() {
    return {
      socials: [
        {
          icon: "/img/twitter.png",
          link: "",
        },
        {
          icon: "/img/instagram.png",
          link: "",
        },
        {
          icon: "/img/telegram.png",
          link: "",
        },
        {
          icon: "/img/youtube.png",
          link: "",
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
