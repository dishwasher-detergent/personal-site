<template>
    <div class="h-screen bg-gray-50 flex flex-col">
      <NavDashboard />
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
}

h1,h2,h3 {
  font-family: "Carena";
  @apply text-blue-600;
}
</style>