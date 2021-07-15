<template>
    <div class="h-full w-full flex flex-col">
        <h3
          class="
            pl-4
            py-2
            font-bold
            truncate
            bg-blue-100
            text-blue-600
            border-b border-gray-300
          "
        >
          Message
        </h3>
        <div v-if="message" class="w-full flex-1 flex flex-col bg-white">
          <DashboardChatMessageSender :initial="message.initial">
            <template v-slot:name>{{message.firstname}} {{message.lastname}}</template>
              <template v-slot:email>{{message.email}}</template>
              <template v-slot:timestamp>{{message.timestamp}}</template>
          </DashboardChatMessageSender>
          <div
            class="flex-1 p-8 h-full border-t border-gray-300 overflow-y-auto"
          >
            <h1 class="mb-4 ml-1 text-2xl break-all">
              {{message.subject}}
            </h1>
            <p class="text-xs text-gray-600">Message</p>
            <p class="mt-2 ml-1 p-4 break-all bg-gray-100 rounded-2xl">
              {{message.message}}
            </p>
          </div>
        </div>
      </div>
</template>
<script>
export default {
  data() {
    return {
      message: null,
    };
  },
  mounted() {
    this.$store.watch(
      (state) => {
        return this.$store.state.message
      },
      () => {
          this.getMessages()
      }
    )
    if(this.$store.state.message)
        this.getMessages()
  },
  methods: {
    async getMessages() {
      try {
        let { data: inquirie, error } = await this.$supabase
          .from("inquiries")
          .select("*")
          .eq('id',this.$store.state.message)
        if (error) {
          throw error;
        } else {
          this.message = inquirie[0];
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>