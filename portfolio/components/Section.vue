<template>
  <div class="pt-4">
    <h2 class="ml-6 py-2 text-2xl">
      <slot name="title"></slot>
    </h2>
    <div
      class="
        w-full
        rounded-3xl
        p-4
        md:p-12
        lg:p-24
        bg-gray-100
      "
    >
      <slot name="content"></slot>
    </div>
  </div>
</template>