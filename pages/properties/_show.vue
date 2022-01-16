<template>
  <div>
    <div class="bg-image-hero bg-cover h-80"></div>
    <div class="">
      <div
        class="
        max-w-6xl
        px-4
        py-8
        w-full
        mx-auto
      "
      >
        <div class="md:flex justify-between text-black font-normal">
          <div class="mb-4">
            <h2 class="font-medium text-2xl">Diamono Property</h2>
            <div class="text-lg">10,000sqm in Ibeju Lekki, Lagos</div>
            <div class="italic text-gray-700 text-sm">Uploaded by Bisuga Oladimeji</div>
          </div>

          <div class="mb-4">
            <div class="flex flex-row">
              <button class="btn-green">Buy Fractions</button>
              <button class="btn-light-green ml-6">Buy Bulk</button>
            </div>
          </div>
        </div>

        <div class="rounded-lg bg-opacity-40 bg-gray-300 py-4 md:py-8 inline-flex mb-8">
          <div class="md:px-6 px-3 py-1 border-r-2">
            <div class="text-xs text-center mb-4 text-gray-700">Floor Price</div>
            <div class="font-semibold text-sm md:text-base text-center">
              $50/<small class="font-normal">fraction</small>
            </div>
          </div>
          <div class="md:px-6 px-3 py-1 border-r-2">
            <div class="text-xs text-center mb-4 text-gray-700">Total Traded</div>
            <div class="font-semibold text-sm md:text-base text-center">
              450 <small class="font-normal">fractions</small>
            </div>
          </div>
          <div class="md:px-6 px-3 py-1 border-r-2">
            <div class="text-xs text-center mb-4 text-gray-700">Total Available</div>
            <div class="font-semibold text-sm md:text-base text-center">
              450 <small class="font-normal">fractions</small>
            </div>
          </div>
          <div class="md:px-6 px-3 py-1">
            <div class="text-xs text-center mb-4 text-gray-700">Owners</div>
            <div class="font-semibold text-sm md:text-base text-center">
              10
            </div>
          </div>
        </div>

        <div class="text-gray-700 text-sm border-b border-gray-700 border-opacity-50 pb-5 mb-8">
          <p class="mb-3">
            Diamono Property (Lagoon Front ) located on the North side of the Lekki Lagoon located along Lekki-Epe expressway, Ibeju Lekki, Lagos.
          </p>
          <p class="mb-3">
            The estate is strategically located in the fastest developing area of Lagos with great appreciation rate hence generating a high return on investment.
          </p>
          <p class="mb-3">
            Title :  Government Allocation
          </p>

          <div class="mb-3">
            LANDMARKS
            <ul>
              <li>🔉 Lekki Free Trade Zone.</li>
              <li>🔉 Dangote Refinary and Petrochemical Industries.</li>
              <li>🔉 Dangote Jetty.</li>
              <li>🔉 Eleganza Industrial city.</li>
              <li>🔉 Eleko Junction. etc.</li>
            </ul>
          </div>

          <div class="mb-3">
          ESTATE FEATURES

            <ul>
              <li>📍 Perimeter Fencing.</li>
              <li>📍 Strong Gate House.</li>
              <li>📍 Good road network.</li>
              <li>📍 Sewage Disposal.</li>
              <li>📍 Well planned drainage system.</li>
            </ul>
          </div>
        </div>

        <div class="border-b border-gray-700 border-opacity-50 pb-8 mb-8">
          <h2 class="font-semibold text-xl mb-4">Owners</h2>

          <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
            <div class="">
              <div class="bg-green-25 text-stroke text-4xl text-center font-semibold py-4 text-transparent rounded-t-lg">
                MB
              </div>
              <div class="box-shadow bg-white p-2 pb-3 rounded-b-lg">
                <div class="flex w-full mb-3">
                  <span class="text-gray-700">10 units</span>
                  <span class="ml-auto">
                    <span class="text-sm font-semibold">$80</span><small>/fraction</small>
                  </span>
                </div>
                <button class="btn-green mx-auto">Buy</button>
              </div>
            </div>
          </div>
        </div>

        <div class="pb-8 mb-8">
          <h2 class="font-semibold text-xl mb-4">Activities</h2>

          <div class="flex items-center border-b border-gray-700 border-opacity-30 py-4 px-2">
            <div class="mr-4">Alhamin Abdulrahman just bought 2 plots at $50/fraction</div>
            <img src="/img/chevron-right.png" class="h-5 ml-auto" alt="chevron right" >
          </div>

          <div class="flex items-center border-b border-gray-700 border-opacity-30 py-4 px-2">
            <div class="mr-4">Alhamin Abdulrahman just bought 2 plots at $50/fraction</div>
            <img src="/img/chevron-right.png" class="h-5 ml-auto" alt="chevron right" >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PropertiesShowPage'
}
</script>

<style scoped>
.bg-image-hero {
  background-image: url("/img/land3.png");
}

.btn-green {
  @apply bg-green-650 rounded-lg text-white block px-8 md:px-14 py-2 rounded-full hover:bg-opacity-70
}

.btn-light-green {
  @apply border-green-650 bg-green-25 border rounded-lg text-black block px-8 md:px-14 py-2 rounded-full hover:bg-opacity-70 hover:border-opacity-70
}

.text-stroke {
  -webkit-text-stroke: 2px #555555;
}

.box-shadow {
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.1);
}
</style>
