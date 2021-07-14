<template>
  <div
    class="
      py-2
      px-4
      md:mr-8
      flex-none flex flex-row
      justify-between
      rounded-2xl
      hover:bg-blue-50
    "
  >
    <div class="pr-2">
      <button class="h-full flex items-center">
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
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>
    <div class="pr-2 md:pr-4 flex items-center">
      <h2 class="text-sm md:text-md font-bold">{{ username }}</h2>
    </div>
    <div
      class="
        h-10
        w-10
        bg-blue-600
        rounded-full
        flex
        items-center
        justify-center
        text-white
        font-bold
      "
    >
      <Avatar
        variant="marble"
        :size="40"
      />
    </div>
  </div>
</template>
<script>
import Avatar from "vue2-boring-avatars";
export default {
  components: { Avatar },
  data() {
    return {
      user: null,
      username: null,
      email: null,
    };
  },
  async mounted() {
    await this.getUser();
  },
  methods: {
    async getUser() {
      this.user = this.$supabase.auth.user();
      this.email = this.user.email;
      this.username = this.email.split("@")[0];
    },
  },
};
</script>