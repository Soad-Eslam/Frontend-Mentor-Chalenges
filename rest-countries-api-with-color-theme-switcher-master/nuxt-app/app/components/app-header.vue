<template>
  <div class="flex border-b-1 justify-between items-center py-4 px-2 md:px-8">
    <h1 class="font-bold">Where in the world?</h1>
    <div>
      <button
        @click="
          colorMode.preference =
            colorMode.preference === 'dark' ? 'light' : 'dark'
        "
        class="flex items-center gap-2"
      >
        <Icon
          :name="isDark ? 'heroicons:moon' : 'heroicons:sun'"
          class="text-xl cursor-pointer"
        />
        Dark Mode
      </button>
    </div>
  </div>
  <div
    class="flex flex-col sm:flex-row sm:justify-between gap-4 mt-5 mb-8 px-2"
  >
    <UInput
      class="w-full sm:w-[500px]"
      v-model="value"
      placeholder="search for a country"
    />
    <USelectMenu class="w-full sm:w-auto" v-model="menuValue" :items="items" />
  </div>
</template>

<script setup>
const value = ref("");
const items = ref(["Africa", "America", "Asia", "Europe", "Oceania"]);
const menuValue = ref("Filter by Region");
const colorMode = useColorMode();
const isDark = computed(() => colorMode.preference === "dark");
console.log(colorMode.preference);
</script>

<style lang="scss" scoped></style>
