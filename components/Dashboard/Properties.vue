<template>
<div id="properties">
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
      <h3 class="font-semibold text-3xl leading-4 text-center mb-4">Properties for Sale</h3>
      <p class="mx-auto text-sm md:text-base">
        Some of our Featured properties up for sale
      </p>
    </div>

    <div class="grid lg:grid-cols-3 md:grid-cols-2 w-5/6 gap-10">
      <div class="text-center md:text-left" v-for="property in properties">
        <dashboard-property-card/>
<!--        <dashboard-property-card :property="property"/>-->
      </div>
    </div>
</div>
</div>
</template>

<script>
export default {
  name: "DashboardProperties",
  data() {
    return {
      properties: [
        {img: '/img/affordable.png', title: 'Affordable', body: 'Buy any amount of land you can afford in fractions.'},
        {img: '/img/trustless.png', title: 'Trustless', body: 'Ownership and transfer is permanently recorded on the blockchain'},
        {img: '/img/dao.png', title: 'DAO-based', body: ''},
      ]
    }
  }
}
</script>

<style scoped>

</style>
