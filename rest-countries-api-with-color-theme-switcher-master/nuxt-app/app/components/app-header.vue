<template>
  <div class="flex border-b-1 justify-between dark:bg-blue-900 items-center py-4 px-2 md:px-8">
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
  
</template>

<script setup>

const colorMode = useColorMode();
const isDark = computed(() => colorMode.preference === "dark");
console.log(colorMode.preference);
</script>

<style lang="scss" scoped></style>
