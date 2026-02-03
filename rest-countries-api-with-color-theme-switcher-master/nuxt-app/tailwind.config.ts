module.exports ={
  darkMode: 'class',
}

export default {
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
  ],
  safelist: [
    "text-white",
    "text-black",
    "text-gray-800",
    "text-gray-900",
    "text-gray-700",
    "text-gray-300",
    "text-gray-400",
    "text-gray-500",
    "text-gray-200",
  ],
};
