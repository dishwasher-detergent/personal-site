<template>
  <section class="relative w-full h-full flex-1 flex flex-col md:grid grid-cols-6">
    <article
      class="
        overflow-hidden
        md:col-span-2
        h-full
        flex-1
        flex flex-col
        bg-gray-100
        border-r border-b border-gray-300
      "
    >
      <h3
        class="
          flex-none
          pl-4
          py-2
          font-bold
          truncate
          bg-blue-100
          text-blue-600
          border-b border-gray-300
        "
      >
        Inquiries
      </h3>
      <DashboardChatMessages />
    </article>
    <article
      v-if="windowWidth <= mobile && this.$store.state.message"
      class="absolute inset-0"
    >
      <DashboardChatMessage />
    </article>
    <article
      v-if="windowWidth > mobile"
      class="flex overflow-hidden md:col-span-4 md:h-full flex-1 flex-col"
    >
      <DashboardChatMessage />
    </article>
  </section>
</template>
<script>
export default {
  layout: "dashboard",
  data(){
    return{
      windowWidth: window.innerWidth,
      mobile: 768,
    }
  },
  mounted() {
    window.addEventListener("resize", this.onResize);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>