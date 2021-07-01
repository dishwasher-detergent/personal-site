<template>
  <div class="mt-8 flex justify-end items-center">
    <button
      v-if="stage != 'who'"
      @click="lastStage"
      class="text-blue-600 flex flex-row items-center mr-6"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      <span class="ml-2">Back</span>
    </button>
    <button
      @click="nextStage"
      type="submit"
      class="
        w-24
        py-2
        px-4
        inline-block
        relative
        text-center
        rounded-3xl
        bg-blue-600
        text-white
      "
    >
        <span v-if="stage == 'why'" class="w-full h-full flex items-center justify-center">
            Send
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transform rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
        </span>
        <span v-else>
            Next
        </span>
    </button>
  </div>
</template>
<script>
export default {
  props: ["stage"],
  methods: {
    nextStage() {
        if(this.stage === 'why')
          this.$emit("send");
        else
          this.$emit("next");
    },
    lastStage() {
      this.$emit("last");
    },
  },
};
</script>
