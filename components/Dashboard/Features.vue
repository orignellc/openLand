<template>
<div class="bg-green-25 bg-opacity-40">
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
    <div class="mb-10 md:mb-16 text-center">
      <h3 class="font-semibold text-3xl leading-4 text-center mb-4">Features</h3>
      <p class="w-4/5 mx-auto text-sm md:text-base">
        OpenLand is the most open platform for buying, selling and earning returns on land assets on the blockchain.
      </p>
    </div>

    <div class="grid lg:grid-cols-4 md:grid-cols-2 w-5/6 gap-10">
      <div class="text-center md:text-left" v-for="feature in features">
        <img :src="feature.img" :alt="feature.title" class="h-14 mb-3 mx-auto md:ml-0">
        <h4 class="font-semibold text-lg leading-9">{{ feature.title }}</h4>
        <div class="text-sm md:text-base">{{ feature.body }}</div>
      </div>
    </div>
</div>
</div>
</template>

<script>
export default {
  name: "DashboardFeatures",
  data() {
    return {
      features: [
        {img: '/img/affordable.png', title: 'Affordable', body: 'Buy any amount of land you can afford in fractions.'},
        {img: '/img/trustless.png', title: 'Trustless', body: 'Ownership and transfer is permanently recorded on the blockchain'},
        {img: '/img/dao.png', title: 'DAO-based', body: ''},
        {img: '/img/commodity.png', title: 'Commodity', body: 'commodity'},
      ]
    }
  }
}
</script>

<style scoped>

</style>
