<template>
  <form class="w-full flex flex-col" @submit.stop.prevent="userLogin">
    <transition name="slide">
      <div
        class="
          p-8
          w-full
          h-full
          flex-1
          rounded-2xl
          shadow
          bg-white
          flex flex-col
        "
      >
        <div class="space-y-4 flex-1">
          <div
            v-if="error"
            class="
              px-4
              py-3
              w-full
              bg-red-200
              text-red-600 text-bold
              rounded-3xl
            "
          >
            <span>{{ error }}</span>
          </div>
          <label v-if="type !== 'recovery'" class="flex flex-col font-bold">
            <p class="text-sm text-gray-600 mb-2 ml-4">Username</p>
            <input
              v-model="login.email"
              type="text"
              placeholder="person@emailprovider.com"
              class="py-3 px-4 rounded-2xl ring-1 ring-gray-300 text-lg"
            />
          </label>
          <label class="flex flex-col font-bold">
            <p class="text-sm text-gray-600 mb-2 ml-4">Password</p>
            <input
              v-model="login.password"
              type="password"
              placeholder="secretly secret"
              class="py-3 px-4 rounded-2xl ring-1 ring-gray-300 text-lg"
            />
          </label>
        </div>
        <div class="mt-8 flex justify-end items-center">
          <button
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
            <span v-if="type === 'recovery'">Reset</span>
            <span v-else>Login</span>
          </button>
        </div>
      </div>
    </transition>
  </form>
</template>
<script>
export default {
  data() {
    return {
      login: {
        email: "",
        password: "",
      },
      error: null,
      type: null,
      access_token: null,
    };
  },
  async mounted() {
    let orig_hash = this.$route.hash;

    if (orig_hash) {
      this.type = "recovery";

      const params = orig_hash.split("#")[1];
      const paramsObj = Object.fromEntries(
        new URLSearchParams(params).entries()
      );

      this.access_token = paramsObj.access_token;
    } else {
      const { type = null } = this.$route.query;
      this.type = type;
      if (
        type &&
        (type === "signIn" || type === "signUp" || type === "signOut")
      ) {
        this.type = type;
        if (type === "signOut") {
          await this.signOut();
        }
      }
    }
  },
  methods: {
    async userLogin() {
      if (this.type === "recovery") {
        this.resetPass();
      } else {
        this.loginUser();
      }
    },
    async signOut() {
      try {
        let response = await this.$auth.logout("supabase");
      } catch (err) {
        console.log(err);
      }
    },
    async loginUser() {
      try {
        let response = await this.$auth.loginWith("supabase", {
          email: this.login.email.toLowerCase(),
          password: this.login.password,
        });
      } catch (err) {
        this.error = err.message;
      }
    },
    async resetPass() {
      try {
        const { error, data } = await this.$supabase.auth.api.updateUser(
          this.access_token,
          {
            password: this.login.password,
          }
        );
        if (error) throw error;
      } catch (err) {
        this.error = err.message;
      }
    },
  },
};
</script>
