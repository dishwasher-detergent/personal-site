<template>
  <div class="flex flex-col max-w-7xl mx-auto min-h-screen relative px-4">
    <notifications width="400" classes="my-notification"/>
    <Nav />
    <Nuxt />
    <Footer />
  </div>
</template>
<style sass>
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

.my-notification {
  @apply mt-4 mr-2 p-4 rounded-2xl;
}

.my-notification.success {
  @apply bg-green-200 text-green-600;
}

.my-notification.warm {
  @apply bg-yellow-200 text-yellow-600;
}

.my-notification.error {
  @apply bg-red-200 text-red-600;
}
</style>