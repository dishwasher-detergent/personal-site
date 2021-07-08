<template>
  <div class="w-full h-full relative">
    <div class="absolute top-0 left-0 right-0 bottom-0 bg-gray-700/5"></div>
    <ik-image
      :path="image"
      :lqip="{ active: true }"
      :transformation="[{ q: 75, c: 'fo-auto' }]"
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
  },
};
</script>