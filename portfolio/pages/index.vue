<template>
  <div class="w-full flex-1 space-y-12">
    <Hero from="yellow" to="red">
      <template v-slot:title> Kenneth<br />Bass </template>
      <template v-slot:sub>A front-end <span>Web Developer</span> with a passion for <span>JavaScript</span> and <span>Design</span></template>
      <template v-slot:social>
        <AboutSocial />
      </template>
    </Hero>
    <About />
    <!-- <Experience /> -->
    <Portfolio />
  </div>
</template>
<style scoped>
span {
  @apply font-bold text-blue-600
}
</style>