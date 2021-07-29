<template>
  <div ref="message" class="flex-1 overflow-y-auto">
    <DashboardChatMessagePreview
      v-for="message in messages"
      :key="message.id"
      :id="message.id"
      :read="message.read"
      :initial="message.initial"
    >
      <template v-slot:subject>{{ message.subject }}</template>
      <template v-slot:timestamp>{{ message.timestamp }}</template>
    </DashboardChatMessagePreview>
  </div>
</template>
<script>
export default {
  data() {
    return {
      messages: null,
    };
  },
  async mounted() {
    await this.getMessages();
    const inquiries = this.$supabase
      .from("inquiries")
      .on("*", (payload) => {
        this.getMessages();
      })
      .subscribe();
    this.messageAnim();
  },
  methods: {
    async getMessages() {
      try {
        let { data: inquiries, error } = await this.$supabase
          .from("inquiries")
          .select("*")
          .order("id", { ascending: false });
        if (error) {
          throw error;
        } else {
          this.messages = inquiries;
        }
      } catch (error) {
        this.$notify({ type: "error", text: error });
        console.log(error);
      }
    },
    messageAnim() {
      const gsap = this.$gsap;
      var timeline = gsap.timeline();

      timeline
        .add("start")
        .from(
          this.$refs.message.children,
          {
            duration: 0.5,
            y: 10,
            stagger: 0.15,
            ease: "back",
          },
          "start"
        );
    },
  },
};
</script>