<template>
  <div ref="item" class="relative flex flex-row h-64 w-full overflow-hidden">
    <div
      ref="image"
      class="
        z-10
        flex-none
        w-64
        h-64
        rounded-3xl
        bg-white bg-gradient-to-br
        from-yellow-200
        to-red-200
        overflow-hidden
      "
    >
      <PortfolioProjectImage :alt="title" :image="image" />
    </div>
    <div
      ref="info"
      class="w-full h-full p-4 flex flex-col rounded-3xl bg-white"
    >
      <div class="flex-1">
        <h2 class="text-2xl font-bold text-blue-600">{{ title }}</h2>
        <PortfolioProjectPills>
          <PortfolioProjectPill
            v-for="tech in techs"
            :key="tech.id"
            :class="'bg-' + tech.color + '-200 text-' + tech.color + '-600'"
          >
            {{ tech.name }}
          </PortfolioProjectPill>
        </PortfolioProjectPills>
        <p>{{ information }}</p>
      </div>
      <div class="flex-none flex justify-end">
        <NuxtLink
          :to="'/Project/' + id"
          class="flex flex-row items-center justify-center text-blue-600"
        >
          View
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id", "title", "techs", "information", "github", "website", "image"],
  data() {
    return {
      observer: null,
      shown: false,
    };
  },
  mounted() {
    this.animation();
  },
  methods: {
    animation() {
      const gsap = this.$gsap;
      var timeline = gsap.timeline({
        scrollTrigger: {
          trigger: this.$refs.item,
        },
      });

      timeline
        .from(
          this.$refs.info,
          {
            duration: 0.75,
            x: -150,
            width: "100px",
            ease: "back.out(1.5)",
          },
          "start"
        )
        // .to("#info", {
        //   	flex: "1 1 0%";
        // },"start")
        .to(
          this.$refs.info,
          {
            delay: 0.5,
            duration: 0.25,
            borderRadius: "0rem auto auto 0rem",
          },
          "start"
        )
        .to(
          this.$refs.image,
          {
            delay: 0.5,
            duration: 0.35,
            borderRadius: "auto 0rem 0rem auto",
          },
          "start"
        );
    },
  },
};
</script>