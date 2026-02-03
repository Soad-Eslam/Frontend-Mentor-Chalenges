<template>
  <div class="px-2 md:px-8 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
    <div
      v-for="country in countries"
      :key="country.cca3"
      class="bg-white dark:bg-blue-950 rounded shadow-lg overflow-hidden cursor-pointer"
    >
      <img
        :src="country.flags.png"
        :alt="country.name"
        class="w-full h-40 object-cover"
      />

      <div class="p-4">
        <h2 class="font-bold text-lg mb-2">
          {{ country.name}}
        </h2>

        <p><strong>Population:</strong> {{ country.population.toLocaleString() }}</p>
        <p><strong>Region:</strong> {{ country.region }}</p>
        <p><strong>Capital:</strong> {{ country.capital? country.capital : 'N/A' }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import countries from '../../data.json'
</script>
