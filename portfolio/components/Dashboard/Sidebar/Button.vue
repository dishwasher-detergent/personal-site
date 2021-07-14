<template>
  <li>
    <NuxtLink
      :to="'/Dashboard/' + to"
      class="
        w-full
        py-2
        px-4
        flex flex-row
        items-center
        rounded-2xl
        text-blue-600
        hover:bg-blue-100
      "
    >
      <span class="pr-4">
        <slot name="svg"></slot>
      </span>
      <span class="truncate">
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