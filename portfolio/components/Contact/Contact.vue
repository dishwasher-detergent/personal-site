<template>
  <form
  class="w-full"
    @submit.stop.prevent=""
  >
    <transition name="slide">
      <div class="p-8 w-full flex-1 h-96 rounded-2xl shadow bg-white flex flex-col" ref="subject" v-if="slug == 'What'">
        <h2 class="text-5xl mb-6">Pique My Interest</h2>
        <div class="space-y-6 flex-1">
          <label class="flex flex-col font-bold">
            <p class="text-sm text-gray-600 mb-2 ml-4">Subject</p>
            <input
              type="text"
              placeholder="Howdy Partner"
              class="py-3 px-4 rounded-2xl ring-1 ring-gray-300 text-lg"
            />
          </label>
        </div>
        <div class="mt-6 flex justify-end items-center space-x-8">
          <NuxtLink
            to="/Contact/Who"
            class="text-blue-600 flex flex-row items-center"
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
          </NuxtLink>
          <NuxtLink
            to="/Contact/Why"
            class="
              w-24
              py-2
              px-4
              inline-block
              relative
              text-center
              rounded-r-3xl rounded-l
              bg-blue-600
              text-white
            "
          >
            Next
          </NuxtLink>
        </div>
      </div>
      </transition>
      <transition name="slide">
      <div class="p-8 w-full flex-1 h-96 rounded-2xl shadow bg-white flex flex-col" ref="message" v-if="slug == 'Why'">
        <h2 class="text-5xl mb-6">Spill The Beans</h2>
        <div class="space-y-6 flex-1">
          <label class="flex flex-col font-bold">
            <p class="text-sm text-gray-600 mb-2 ml-4">Message</p>
            <textarea
              placeholder="What it do?"
              class="
                py-3
                px-4
                h-36
                rounded-2xl
                ring-1 ring-gray-300
                resize-none
              "
            ></textarea>
          </label>
        </div>
        <div class="mt-6 flex justify-end items-center space-x-8">
          <NuxtLink
            to="/Contact/What"
            class="text-blue-600 flex flex-row items-center"
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
          </NuxtLink>
          <button
            @click="sendEmail()"
            class="
              w-24
              py-2
              px-4
              inline-block
              relative
              text-center
              rounded-r-3xl rounded-l
              bg-blue-600
              text-white
            "
          >
            Send
          </button>
        </div>
      </div>
      </transition>
      <transition name="slide">
      <div class="p-8 w-full flex-1 h-96 rounded-2xl shadow bg-white flex flex-col" ref="who-are-you" v-if="slug == 'Who'">
        <h2 class="text-5xl mb-6">Who are you?</h2>
        <div class="space-y-4 flex-1">
          <label class="flex flex-col font-bold">
            <p class="text-sm text-gray-600 mb-2 ml-4">First Name</p>
            <input
              type="text"
              placeholder="David"
              class="py-3 px-4 rounded-2xl ring-1 ring-gray-300 text-lg"
            />
          </label>
          <label class="flex flex-col font-bold">
            <p class="text-sm text-gray-600 mb-2 ml-4">Last Name</p>
            <input
              type="text"
              placeholder="Spade"
              class="py-3 px-4 rounded-2xl ring-1 ring-gray-300 text-lg"
            />
          </label>
        </div>
        <div class="mt-6 flex justify-end items-center">
          <NuxtLink
            to="/Contact/What"
            class="
              w-24
              py-2
              px-4
              inline-block
              relative
              text-center
              rounded-r-3xl rounded-l
              bg-blue-600
              text-white
            "
          >
            Next
          </NuxtLink>
        </div>
      </div>
      </transition>
  </form>
</template>
<script>
export default {
  data() {
    return {
      slug: "",
    };
  },
  mounted() {
    this.slug = this.$route.params.slug;
  },
  watch: {
    $route: function () {
      this.slug = this.$route.params.slug;
    },
  },
  methods: {},
};
</script>
<style scoped>
h2 {
  @apply text-gray-700 !important;
}

.fade-leave-active,
.fade-enter-active {
  transition: 1s;
}

.fade-enter {
  opacity: 0;
}

.slide-enter-active {
  animation: slideIn 1s ease-out both;
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
</style>