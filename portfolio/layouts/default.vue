<template>
  <div class="flex flex-col max-w-7xl mx-auto h-screen relative text-base-content px-4">
    <Nav />
    <Nuxt />
    <Footer />
  </div>
</template>
<style>
@font-face {
  font-family: "Carena";
  src: url('~assets/Carena-Regular.otf');
}

html {
  @apply text-gray-700;
  transition: all .25s;
}

h1,h2,h3 {
  font-family: "Carena";
  @apply text-blue-600
}
</style>