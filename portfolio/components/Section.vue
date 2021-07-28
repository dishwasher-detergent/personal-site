<template>
  <div ref="section" class="pt-4">
    <h2 class="ml-6 py-2 text-2xl">
      <slot name="title"></slot>
    </h2>
    <div class="w-full rounded-3xl p-4 md:p-12 lg:p-24 bg-gray-100">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
// export default {
//   mounted() {
//     this.sectionAnim();
//   },
//   methods: {
//     sectionAnim() {
//       const gsap = this.$gsap;
//       var timeline = gsap.timeline({
//         scrollTrigger: {
//           trigger: this.$refs.section,
//         },
//       });

//       timeline.from(this.$refs.section, {
//         scale: .9,
//         ease: 'back.out(1)'
//       });
//     },
//   },
// };
</script>