<template>
  <div
    ref="hero"
    class="
      w-full
      flex
      items-center
      justify-center
      relative
      overflow-hidden
      rounded-3xl
      py-16
      md:py-48
      px-6
      md:px-24
      bg-gradient-to-br
    "
    :class="{
      'from-yellow-200 to-red-200': from == 'yellow',
      'from-blue-200 to-red-200': from == 'blue',
      'from-purple-200 to-red-200': from == 'purple',
    }"
  >
    <div class="flex flex-col md:flex-row h-full w-full">
      <div>
        <h1 ref="heroText" class="block text-6xl md:text-9xl">
          <slot name="title"></slot>
        </h1>
        <p ref="subText" class="md:text-xl">
          <slot name="sub"></slot>
        </p>
      </div>
      <div ref="extraContent" class="w-full h-full mt-8 md:mt-0 md:ml-16">
        <slot name="extra-content"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["from", "to"],
  mounted() {
    this.heroAnim();
  },
  methods: {
    heroAnim() {
      const gsap = this.$gsap;
      var timeline = gsap.timeline();

      timeline.add(
        gsap.from(this.$refs.hero, {
          duration: .45,
          height: 0,
          paddingTop: 0,
          ease: "back.out(1)",
        }),
        gsap.from(this.$refs.heroText, {
          delay: 0.5,
          duration: 0.5,
          opacity: 0,
          y: -50,
          ease: "back.out(2.5)",
        }),
        gsap.from(this.$refs.extraContent, {
          delay: .75,
          duration: 0.5,
          opacity: 0,
          y: -50,
          ease: "back.out(2.5)",
        }),
        gsap.from(this.$refs.subText, {
          delay: .75,
          duration: 0.5,
          opacity: 0,
          y: -50,
          ease: "back.out(2.5)",
        })
      );
    },
  },
};
</script>
<style scoped>
div {
  background-size: 400% 400%;

  -webkit-animation: AnimationName 15s ease infinite;
  -moz-animation: AnimationName 15s ease infinite;
  animation: AnimationName 15s ease infinite;
}

@-webkit-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes AnimationName {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
