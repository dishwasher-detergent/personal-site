<template>
  <div class="w-full flex-1">
    <Hero from="purple" to="red">
        <template v-slot:title>
          Contact<br>Me
        </template>
        <template v-slot:extra-content>
          <Contact />
        </template>
    </Hero>
  </div>
</template>