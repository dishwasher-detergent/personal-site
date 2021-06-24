<template>
    <div class="w-full flex justify-end relative">
      <div
        class="absolute left-0 w-1/2 h-full flex items-center justify-center"
      >
        <div class="w-full h-96 p-8 rounded-3xl relative overflow-hidden bg-white flex flex-col">
          <h2 class="text-4xl flex-none">{{title}}</h2>
          <Pills>
            <Pill v-for="tech in techs" :key="tech.id" :class="'bg-' + tech.color + '-200 text-' + tech.color + '-600'">
                {{tech.name}}
            </Pill>
          </Pills>
          <article class="mx-4 mt-4 flex flex-row flex-1">
            <span
              class=" flex-none w-1 bg-blue-600 rounded-l-3xl rounded-r-lg mr-4"
            ></span>
            <p class="flex-1">
                {{information}}
            </p>
          </article>
          <div class="flex justify-end items-center w-full pt-2">
            <span>
              <a
                v-if="github"
                target="_blank"
                :href="'https://github.com' + github"
                class="
                  w-24
                  py-2
                  px-4
                  mr-2
                  rounded-l-3xl rounded-r
                  bg-black
                  text-white
                "
              >
                GitHub
              </a>
              <ProjectCardLink
                :website="website"
                :github="github"
              >
                Website
              </ProjectCardLink>
            </span>
          </div>
        </div>
      </div>
      <div class="w-4/5 h-large bg-gray-300 rounded-3xl"></div>
    </div>
</template>
<script>
export default {
    props: [
        'title',
        'techs',
        'information',
        'github',
        'website'
    ],
}
</script>
<style scoped>
.h-large {
  height: 30rem;
}
</style>