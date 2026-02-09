<template>
  <div class="min-h-screen flex  justify-center px-4">
    <div class="w-full max-w-5xl px-8 py-10 bg-white dark:bg-blue-950 rounded shadow-lg">
      
      <button
        @click="goBack"
        class="mb-6 px-6 py-2 bg-gray-400 rounded border border-gray-200 dark:bg-blue-900 hover:bg-gray-300 dark:hover:bg-blue-800"
      >
        ← Back
      </button>
      <div class="flex flex-col items-center md:flex-row gap-10">
        <img
          :src="country.flags.png"
          :alt="country.name"
          class="w-full md:w-[400px] h-auto object-cover rounded"
        />

        <div class="flex-1">
            <h1 class="font-bold text-2xl mb-8 ">
        {{ country.name }}
      </h1>
          <p class="mb-4"><strong>Native Name:</strong> {{ country.nativeName }}</p>
          <p class="mb-4"><strong>Population:</strong> {{ country.population.toLocaleString() }}</p>
          <p class="mb-4"><strong>Region:</strong> {{ country.region }}</p>
          <p class="mb-4"><strong>Sub Region:</strong> {{ country.subregion }}</p>
          <p class="mb-4"><strong>Capital:</strong> {{ country.capital }}</p>
        </div>
      </div>

    </div>
  </div>
</template>


<script setup>
import countries from "../../../data.json";
const route = useRoute();
const country = computed(() => {
  return countries.find((c) => c.name === route.params.name);
});
const goBack = () => {
  window.history.back();
};
</script>

<style lang="scss" scoped></style>
