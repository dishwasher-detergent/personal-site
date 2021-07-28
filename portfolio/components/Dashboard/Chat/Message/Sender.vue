<template>
  <div class="flex-none p-4">
    <div class="p-2 w-full flex flex-col md:flex-row rounded-2xl bg-blue-50">
      <div class="flex flex-row">
        <Avatar variant="beam" :size="40" :name="initial"/>
        <div class="pl-6 flex-1 flex flex-col md:flex-row md:space-x-8">
          <div>
            <p class="text-xs text-gray-600">From</p>
            <p class="ml-1 font-bold text-lg"><slot name="name"></slot></p>
          </div>
          <div>
            <p class="text-xs text-gray-600">Email</p>
            <p class="ml-1"><slot name="email"></slot></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Avatar from "vue2-boring-avatars";
export default {
  components: { Avatar },
  props: ['initial']
}
</script>