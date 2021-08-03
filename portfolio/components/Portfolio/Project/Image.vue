<template>
  <div class="w-full h-full relative">
    <div v-if="res == 'normal'" class="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-br from-yellow-200/20 to-red-200/20 opacity-1 hover:opacity-0"></div>
    <ik-image
      :path="image"
      :lqip="{ active: (res == 'high' ? false : true) }"
      :transformation="[{ q: (res == 'high' ? 100 : 75), c: 'fo-auto' }]"
      class="w-full h-full object-cover object-left-top"
      :alt="alt"
    />
  </div>
</template>
<script>
export default {
  props: {
    image: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "",
    },
    res: {
      type: String,
      default: "normal",
    },
  },
};
</script>
<style scoped>
div {
  transition: all .25s;
}
</style>