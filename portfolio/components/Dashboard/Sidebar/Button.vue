<template>
  <li>
    <NuxtLink
      :to="'/Dashboard/' + to"
      class="
        w-full
        md:p-2
        lg:py-2
        lg:px-4
        flex flex-row
        items-center
        md:justify-center
        lg:justify-start
        rounded-2xl
        text-blue-600
        hover:bg-blue-50
      "
    >
      <span class="lg:pr-4 md:block h-6 w-6 lg:h-9 lg:w-9">
        <slot name="svg"></slot>
      </span>
      <span class="md:hidden lg:inline truncate">
        <slot name="content"></slot>
      </span>
    </NuxtLink>
  </li>
</template>
<script>
export default {
  props: ["to"],
};
</script>