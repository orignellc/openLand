<template>
  <div class="">
    <div
      class="
        max-w-6xl
        px-4
        pt-16
        md:pt-24
        w-full
        mx-auto
      "
    >
      <div class="mb-10 md:mb-16 text-center">
        <h3 class="font-semibold text-3xl leading-4 text-center mb-4">How It Works</h3>
        <p class="w-4/5 mx-auto text-sm md:text-base">
          It works differently for both the Realtor and the Buyer
        </p>
      </div>

      <div class="mb-10">
        <img src="/img/open-land-how-it-works.png" alt="how open land works">
      </div>

      <div class="py-12">
        <h3 class="font-semibold text-2xl leading-4 mb-6">For Realtors</h3>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="flex items-center" v-for="(step, key) in stepsForRealtors">
            <div class="bg-green-25 text-4xl h-20 w-20 rounded-full inline-flex items-center justify-center">{{
                key + 1
              }}
            </div>
            <div class="w-4/5 mx-auto text-sm ml-6">{{ step }}</div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-teal-500 bg-opacity-70">

      <div
        class="
        max-w-6xl
        px-4
        py-12
        w-full
        mx-auto
      "
      >
        <h3 class="font-semibold text-2xl leading-4 mb-6">For Buyers</h3>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="flex items-center" v-for="(step, key) in stepsForBuyers">
            <div class="bg-green-25 text-4xl h-20 w-20 rounded-full inline-flex items-center justify-center">{{
                key + 1
              }}
            </div>
            <div class="w-4/5 mx-auto text-sm ml-6">{{ step }}</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardHowItWorks",
  data() {
    return {
      stepsForRealtors: [
        "Register on the platform, get verified",
        "Upload your property details and set your price. A digital version of your property is created after verification.",
        "After verification, your property is minted as an NFT. Sit, wait and earn passively every time a piece of your property is traded."
      ],
      stepsForBuyers: [
        "Register on the platform, browse, select and buy units of properties",
        "Make payment using our open peer-to-peer payment system",
        "After payment, a new price is manually set by you before the end of the ‘cool down period’ and pay a percentage of your sale price as commission to property owner"
      ],
    }
  }
}
</script>

<style scoped>

</style>
