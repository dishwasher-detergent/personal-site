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
      <button
        @click="unFocusCurrentMessage()"
        class="
          flex
          md:hidden
          flex-row
          items-center
          px-2
          py-1
          mr-2
          rounded-2xl
          hover:bg-blue-200
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="ml-2">Back</span>
      </button>
      <span class="hidden md:inline">Message</span>
    </h3>
    <transition name="fade">
      <div v-if="message" class="w-full flex-1 flex flex-col bg-white">
        <DashboardChatMessageSender :initial="message.initial">
          <template v-slot:name
            >{{ message.firstname }} {{ message.lastname }}</template
          >
          <template v-slot:email>{{ message.email }}</template>
          <template v-slot:timestamp>{{ message.timestamp }}</template>
        </DashboardChatMessageSender>
        <div class="flex-1 p-8 h-full border-t border-gray-300 overflow-y-auto">
          <h1 class="mb-4 ml-1 text-2xl break-all">
            {{ message.subject }}
          </h1>
          <p class="text-xs text-gray-600">Message</p>
          <p class="mt-2 ml-1 p-4 break-all bg-gray-100 rounded-2xl">
            {{ message.message }}
          </p>
        </div>
      </div>
      <div v-else class="w-full flex-1 flex items-center justify-center bg-gray-200">
        <p class="p-6 bg-gray-300 rounded-xl text-gray-600 text-xl">
          Please select a message to view!
        </p>
      </div>
    </transition>
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
        return this.$store.state.message;
      },
      () => {
        this.getMessages();
      }
    );
    if (this.$store.state.message) this.getMessages();
  },
  methods: {
    async getMessages() {
      if(!this.$store.state.message) return
      try {
        let { data: inquirie, error } = await this.$supabase
          .from("inquiries")
          .select("*")
          .eq("id", this.$store.state.message);
        if (error) {
          throw error;
        } else {
          this.message = inquirie[0];
        }
      } catch (err) {
        console.log(err);
      }
    },
    unFocusCurrentMessage(){
      this.$store.commit("SET_MESSAGE", null);
    }
  },
};
</script>
<style scoped>
  .fade-leave-active,
  .fade-enter-active {
    transition: 1s;
  }

  .fade-enter {
    opacity: 0;
  }
</style>