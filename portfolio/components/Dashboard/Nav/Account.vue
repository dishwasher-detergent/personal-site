<template>
  <div class="relative">
    <div
      @click="acctDrop = !acctDrop"
      class="
        py-2
        px-4
        md:mr-8
        flex-none flex flex-row
        justify-between
        rounded-2xl
        hover:bg-blue-100
        cursor-pointer
      "
    >
      <div class="pr-2">
        <div class="h-full flex items-center">
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
        </div>
      </div>
      <div class="pr-2 md:pr-4 flex items-center">
        <h2 class="text-sm md:text-base font-bold">{{ username }}</h2>
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
        <Avatar variant="beam" :size="40" :name="user"/>
      </div>
    </div>
    <ul
      v-if="acctDrop"
      class="absolute w-48 top-16 right-8 p-4 rounded-2xl border border-gray-300 bg-white z-50"
    >
      <li class="text-sm truncate mb-4">
        {{email}}
      </li>
      <li>
        <NuxtLink to="/Login?type=signOut" class="flex items-center justify-center w-full py-2 rounded-2xl bg-blue-600 text-white">
          Logout
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script>
import Avatar from "vue2-boring-avatars";
export default {
  components: { Avatar },
  data() {
    return {
      user: 'temp',
      username: null,
      email: null,
      acctDrop: false
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