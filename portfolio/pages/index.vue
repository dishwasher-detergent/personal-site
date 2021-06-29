<template>
  <div class="w-full flex-1 space-y-16">
    <Hero from="yellow" to="red">
        <template v-slot:title>
          Kenneth<br>Bass
        </template>
      </Hero>
    <Portfolio/>
  </div>
</template>