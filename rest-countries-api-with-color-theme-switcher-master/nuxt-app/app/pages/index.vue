<template>
  <div
    class="flex flex-col sm:flex-row sm:justify-between gap-4 mt-5 mb-8 px-2"
  >
    <UInput
      v-model="InputValue"
      placeholder="search for a country"
      class="w-full sm:w-[500px] text-gray-400 dark:text-white bg-white dark:bg-blue-900 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    <USelectMenu
      v-model="menuValue"
      :items="items"
      class="w-full sm:w-auto text-gray-400 dark:text-white bg-white dark:bg-blue-900 border border-gray-400 rounded"
    />
  </div>
  <div
    class="px-2 md:px-8 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
  >
    <NuxtLink
      v-for="country in filterCountries"
      :key="country.cca3"
      :to="`/country/${country.name}`"
      class="bg-white dark:bg-blue-900 rounded shadow-lg overflow-hidden cursor-pointer block"
    >
      <img
        :src="country.flags.png"
        :alt="country.name"
        class="w-full h-40 object-cover"
      />

      <div class="p-4">
        <h2 class="font-bold text-lg mb-2">
          {{ country.name }}
        </h2>

        <p>
          <strong>Population:</strong> {{ country.population.toLocaleString() }}
        </p>
        <p><strong>Region:</strong> {{ country.region }}</p>
        <p>
          <strong>Capital:</strong>
          {{ country.capital ? country.capital : "N/A" }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup>
import countries from "../../data.json";
const InputValue = ref("");
const items = ref(["Africa", "Americas", "Asia", "Europe", "Oceania"]);
const menuValue = ref("Filter by Region");
const filterCountries = computed(() => {
  let filtered = countries;
  if (InputValue.value) {
    filtered = filtered.filter((country) =>
      country.name.toLowerCase().includes(InputValue.value.toLowerCase()),
    );
  }
  const matchedRegion = menuValue.value;
  if (matchedRegion && items.value.includes(matchedRegion)) {
    filtered = filtered.filter((country) => country.region === matchedRegion);
  }
  return filtered;
});
</script>
