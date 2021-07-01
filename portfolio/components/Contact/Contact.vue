<template>
  <form class="w-full flex flex-col relative" @submit.prevent="">
    <!-- <p class="absolute -top-32">
      information
      {{contact}}
    </p> -->
    <transition name="slide">
      <div
        class="
          md:absolute
          p-8
          w-full
          h-full
          flex-1
          rounded-2xl
          shadow
          bg-white
          flex flex-col
        "
        v-if="curr_stage == 'why'"
      >
        <div
          v-if="sent"
          class="
            px-4
            py-3
            mb-6
            w-full
            bg-blue-200
            text-blue-600 text-bold
            rounded-3xl
          "
        >
          <span>{{ sent }}</span>
        </div>
        <h2 class="text-5xl mb-6">Spill The Beans</h2>
        <div class="space-y-6 flex-1">
          <label class="flex flex-col font-bold">
            <p class="text-sm text-gray-600 mb-2 ml-4">Message</p>
            <textarea
              v-model="contact.message"
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
        <ContactButtonGroup stage="why" @next="nextStage" @last="backStage" @send="sendEmail" />
      </div>
    </transition>
    <transition name="slide">
      <div
        class="
          md:absolute
          p-8
          w-full
          h-full
          flex-1
          rounded-2xl
          shadow
          bg-white
          flex flex-col
        "
        v-if="curr_stage == 'what'"
      >
        <h2 class="text-5xl mb-6">Pique My Interest</h2>
        <div class="space-y-6 flex-1">
          <label class="flex flex-col font-bold">
            <p class="text-sm text-gray-600 mb-2 ml-4">Subject</p>
            <input
              v-model="contact.subject"
              type="text"
              placeholder="Howdy Partner"
              class="py-3 px-4 rounded-2xl ring-1 ring-gray-300 text-lg"
            />
          </label>
        </div>
        <ContactButtonGroup stage="what" @next="nextStage" @last="backStage" />
      </div>
    </transition>
    <transition name="slide">
      <div
        class="
          md:absolute
          p-8
          w-full
          h-full
          flex-1
          rounded-2xl
          shadow
          bg-white
          flex flex-col
        "
        v-if="curr_stage == 'who'"
      >
        <h2 class="text-5xl mb-6">Who are you?</h2>
        <div class="space-y-4 flex-1 w-full">
          <div
            class="
              flex flex-col
              md:grid md:grid-cols-2
              md:gap-x-4
              space-y-4
              md:space-y-0
            "
          >
            <label class="flex flex-col font-bold">
              <p class="text-sm text-gray-600 mb-2 ml-4">First Name</p>
              <input
                v-model="contact.name.first"
                type="text"
                placeholder="David"
                class="py-3 px-4 rounded-2xl ring-1 ring-gray-300 text-lg"
              />
            </label>
            <label class="flex flex-col font-bold">
              <p class="text-sm text-gray-600 mb-2 ml-4">Last Name</p>
              <input
                v-model="contact.name.last"
                type="text"
                placeholder="Spade"
                class="py-3 px-4 rounded-2xl ring-1 ring-gray-300 text-lg"
              />
            </label>
          </div>
          <label class="flex flex-col font-bold">
            <p class="text-sm text-gray-600 mb-2 ml-4">Email</p>
            <input
              v-model="contact.email"
              type="email"
              placeholder="someone@something.com"
              class="py-3 px-4 rounded-2xl ring-1 ring-gray-300 text-lg"
            />
          </label>
        </div>
        <ContactButtonGroup stage="who" @next="nextStage" @last="backStage" />
      </div>
    </transition>
  </form>
</template>
<script>
export default {
  data() {
    return {
      order: ["who", "what", "why"],
      curr_stage: "who",
      contact: {
        name: {
          first: null,
          last: null,
        },
        email: null,
        subject: null,
        message: null,
      },
      sent: null
    };
  },
  methods: {
    nextStage() {
      let pos = this.order.indexOf(this.curr_stage);
      pos++;

      this.curr_stage = this.order[pos++];
    },
    backStage() {
      let pos = this.order.indexOf(this.curr_stage);
      pos--;

      this.curr_stage = this.order[pos--];
    },
    async sendEmail() {
      try {
        const { data, error } = await this.$axios.post("/api/sendEmail", this.contact);
        if(error) throw error
        this.sent  = data
      } catch (err) {
        alert(err);
      }
    },
  },
};
</script>
<style scoped>
h2 {
  @apply text-gray-700 !important;
}

form {
  min-height: 28rem;
}

.slide-enter-active {
  z-index: 50;
  animation: slideIn 1s ease-out both;
}

.slide-leave-active {
  z-index: 10;
  opacity: 0;
}

@media only screen and (max-width: 640px) {
  .slide-enter-active {
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
    transform: scale(1.01, 0.99) translateX(-15px);
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
    transform: scale(1.01, 0.99) translateY(0);
  }
  30% {
    transform: scale(0.99, 1.01) translateY(-15px);
  }
  50% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
</style>
