<template>
    <div class="min-h-screen bg-gray-50 flex flex-col">
      <DashboardNav />
      <DashboardContent>
        <DashboardSidebar/>
        <Nuxt />
      </DashboardContent>
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

input {
  @apply text-base
}
</style>