<template>
<div class="bg-image-hero bg-cover">
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
        text-center
        mx-auto
      "
  >
    <h1
      class="
          text-black
          leading-tight
          font-bold
          text-4xl
          mb-6
        "
    >
      Own & Trade<br> Fractions of Land
    </h1>
    <p class="text-white w-4/5 mx-auto text-shadow mb-4">
      OpenLand is the most open platform for buying, selling and earning returns on land assets on the blockchain.
    </p>
    <div class="flex flex-row">
      <button class="btn-green">List Properties</button>
      <button class="btn-outline-green ml-6">View Properties</button>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "DashboardHero"
}
</script>

<style scoped>
.bg-image-hero {
  background-image: url("/img/land1.png");
}

.text-shadow {
  text-shadow: 2px 4px 15px rgba(0, 0, 0, 0.25);
}

.btn-green {
  @apply bg-green-650 rounded-lg text-white block px-8 md:px-14 py-2
}

.btn-outline-green {
  @apply border-green-650 border-2 rounded-lg text-white block px-8 md:px-14 py-2
}

</style>
