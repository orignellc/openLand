<template>
  <div class="">
    <div class="rounded-lg shadow bg-white mb-8">
      <div class="px-6 pt-4 pb-3">
        <div class="text-base font-semibold">{{ property.name }}</div>
        <div class="text-sm">{{ property.location }}</div>
      </div>

      <div class="h-48 w-full bg-cover" :style="`background-image: url(${property.img})`"></div>

      <div class="px-6 py-4">
        <div class="text-base flex justify-between">
          <span>${{ property.price }}/fraction</span>
          <span>{{ property.size }}sqm</span>
        </div>
        <div class="text-sm text-gray-700">{{ property.fractions_left }} out of {{ property.total_fractions }} fractions left</div>
      </div>
    </div>

    <button class="btn-outline-green">Buy</button>
  </div>
</template>

<script>
export default {
  name: "DashboardPropertyCard",
  props: {
    property: {
      type: Object,
      default() {
        return {
          img: '/img/land2.png',
          name: 'Diamono Property',
          location: 'Ibeju Lekki, Lagos',
          price: 50,
          total_fractions: 20,
          fractions_left: 6,
          size: 200000,
        }

      }
    }
  }
}
</script>

<style scoped>
.shadow {
  box-shadow: 0 0 7px rgba(15, 185, 93, 0.24);
}

.btn-outline-green {
  @apply border-green-650 border rounded-lg text-green-650 block w-full px-8 md:px-14 py-2
}

</style>
