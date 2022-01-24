<template>
  <div class="bg-gray-400 bg-opacity-20">
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
        <h3 class="font-semibold text-3xl leading-4 text-center mb-4">Built With</h3>
<!--        <p class="mx-auto text-sm md:text-base">-->
<!--          OpenLand was built with love for Africa-->
<!--        </p>-->
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 w-5/6 gap-10 text-center">
        <div class="">
          <img src="/img/solana-logo.png" alt="Solana" class="h-20 mx-auto mb-3">
          <p class="text-base text-gray-700">Solana</p>
        </div>
        <div class="">
          <img src="/img/moralis-logo.png" alt="Moralis" class="h-20 mx-auto mb-3">
          <p class="text-base text-gray-700">Moralis</p>
        </div>
        <div class="">
          <img src="/img/wormhole-network-logo.svg" alt="Wormhole" class="h-20 mx-auto mb-3">
          <p class="text-base text-gray-700">Wormhole</p>
        </div>
        <div class="">
          <img src="/img/ipfs-logo.png" alt="IPFS" class="h-20 mx-auto mb-3">
          <p class="text-base text-gray-700">IPFS</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardBuiltWith",
}
</script>

<style scoped>

</style>
