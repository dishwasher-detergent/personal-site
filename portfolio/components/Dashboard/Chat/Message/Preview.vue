<template>
  <div
    @click="setRead()"
    :class="`
      py-4
      px-2
      flex flex-row
      bg-white
      border-b border-gray-300
      hover:bg-blue-50
      cursor-pointer
    ` + (this.$store.state.message == id ? 'border-r-4 border-r-blue-600':'')"
  >
    <Avatar variant="beam" :size="40" :name="initial"/>
    <div class="px-6 flex-1 truncate">
      <p class="truncate"><slot name="subject"></slot></p>
      <p class="text-xs text-gray-600"><slot name="timestamp"></slot></p>
    </div>
    <div class="flex-none flex items-center">
      <p v-if="read" class="mr-2 text-xs text-gray-600">Read</p>
      <div v-else class="flex flex-row items-center space-x-2">
        <div class="h-3 w-3 rounded-full bg-blue-600"></div>
        <p class="mr-2 text-xs text-blue-600">New</p>
      </div>
    </div>
  </div>
</template>
<script>
import Avatar from "vue2-boring-avatars";
export default {
  components: { Avatar },
  props: ["id", "read", "initial"],
  methods: {
    async setRead() {
      this.$store.commit("SET_MESSAGE", this.id);
      try {
        let { data, error } = await this.$supabase
          .from("inquiries")
          .update({ read: true })
          .eq("id", this.id);
        if (error) throw error;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>