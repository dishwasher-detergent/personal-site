<template>
    <div class="min-h-screen w-full md:h-screen flex flex-col bg-gray-50">
      <notifications position="top right"/>
      <DashboardNav />
      <DashboardContent>
        <DashboardSidebar/>
        <Nuxt />
      </DashboardContent>
    </div>
</template>
<script>
export default {
  middleware: 'auth',
}
</script>
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