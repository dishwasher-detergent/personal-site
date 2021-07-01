<template>
  <div class="w-full flex-1">
    <Hero from="blue" to="red">
      <template v-slot:title>Login</template>
      <template v-slot:extra-content>
        <Login />
      </template>
    </Hero>
  </div>
</template>