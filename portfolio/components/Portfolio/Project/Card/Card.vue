<template>
  <div
    ref="project"
    class="w-full mb-16 flex justify-end relative flex-col md:flex-row"
  >
      <div
        ref="information"
        class="
          md:absolute
          md:left-0
          w-full
          md:w-1/2
          h-full
          flex
          items-center
          justify-center
          z-50
        "
      >
        <div
          class="
            w-full
            md:h-96
            p-8
            rounded-t-3xl
            md:rounded-3xl
            relative
            overflow-hidden
            bg-white
            flex flex-col
            shadow
          "
        >
          <div class="flex-1 flex flex-col">
            <h2 class="text-4xl flex-none">{{ title }}</h2>
            <PortfolioProjectPills>
              <PortfolioProjectPill
                v-for="tech in techs"
                :key="tech.id"
                :class="'bg-' + tech.color + '-200 text-' + tech.color + '-600'"
              >
                {{ tech.name }}
              </PortfolioProjectPill>
            </PortfolioProjectPills>
            <article class="mx-4 mt-4 flex flex-row flex-1">
              <span
                class="
                  flex-none
                  w-1
                  bg-blue-600
                  rounded-l-3xl rounded-r-lg
                  mr-4
                "
              ></span>
              <p class="flex-1">
                {{ information }}
              </p>
            </article>
          </div>
          <div
            class="
              flex-none flex
              justify-center
              md:justify-end
              items-center
              w-full
              pt-6
            "
          >
            <PortfolioProjectCardLink :website="website" :github="github" />
          </div>
        </div>
      </div>
      <div
        class="
          w-full
          md:w-4/5
          h-48
          md:h-large
          bg-gray-300
          rounded-b-3xl
          md:rounded-3xl
          overflow-hidden
          shadow
        "
      >
      	<PortfolioProjectImage :alt="title" :image="image"/>
      </div>
  </div>
</template>
<script>
export default {
  props: ["title", "techs", "information", "github", "website", "image"],
  data() {
    return {
      observer: null,
      shown: false,
    };
  },
  mounted() {
    this.projectCardAnim();
  },
  methods: {
    projectCardAnim() {
      const gsap = this.$gsap;
      var timeline = gsap.timeline({
        scrollTrigger: {
          trigger: this.$refs.project,
        },
      });

      timeline.from(this.$refs.information, {
        delay: .1,
        scaleX: .80,
        scaleY: .9,
        ease: 'back.out(1.5)'
      });
    },
  },
};
</script>
<style scoped>
.h-large,
.md\:h-large {
  height: 30rem;
}

.bounce-enter-active {
  animation: slideIn 1s ease-out both;
}

@media only screen and (max-width: 640px) {
  .bounce-enter-active {
    animation: slideInMobile 1s ease-out both;
  }
}

.fade-leave-active,
.fade-enter-active {
  transition: 1s;
}

.fade-enter {
  opacity: 0;
}

@keyframes slideIn {
  0% {
    transform: scale(1, 1) translateX(0);
  }
  10% {
    transform: scale(0.99, 1.01) translateX(0);
  }
  30% {
    transform: scale(1.01,0.99) translateX(-15px);
  }
  50% {
    transform: scale(1, 1) translateX(0);
  }
  100% {
    transform: scale(1, 1) translateX(0);
  }
}

@keyframes slideInMobile {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(1.01,0.99) translateY(0);
  }
  30% {
    transform: scale(0.99,1.01) translateY(-15px);
  }
  50% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
</style>
