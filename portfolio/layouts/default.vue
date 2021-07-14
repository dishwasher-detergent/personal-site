<template>
  <div class="flex flex-col max-w-7xl mx-auto min-h-screen relative px-4">
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
  font-family: 'Poppins', sans-serif;
}

h1,h2 {
  font-family: "Carena";
  @apply text-blue-600;
}
</style>