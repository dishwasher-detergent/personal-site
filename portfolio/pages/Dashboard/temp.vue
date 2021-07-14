<template>
  <div class="p-8">
    <ProjectCard
      :key="project.id"
      :title="project.title"
      :techs="project.techs"
      :information="project.information"
      :website="project.website"
      :github="project.github"
      :image="project.image"
    />
    <form
      @submit.stop.prevent=""
      class="
        w-full
        p-8
        mt-8
        space-y-8
        rounded-3xl
        bg-white
        border border-gray-300
        roundex-3xl
        shadow
      "
    >
      <label class="flex flex-col font-bold">
        <p class="text-sm text-gray-600 mb-2 ml-4">Title</p>
        <input
          v-model="project.title"
          type="text"
          placeholder="Super Awesome Project"
          class="py-3 px-4 rounded-2xl ring-1 ring-gray-300 text-lg"
        />
      </label>
      <label class="flex flex-col font-bold">
        <p class="text-sm text-gray-600 mb-2 ml-4">Technologies Used</p>
        <Pills v-if="project.techs.length > 0">
          <Pill
            v-for="tech in project.techs"
            :key="tech.id"
            :class="'bg-' + tech.color + '-200 text-' + tech.color + '-600'"
          >
            {{ tech.name }}
            <button class="inline text-red-600" @click="removeTech(tech.name)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </Pill>
        </Pills>
        <span class="inline-flex space-x-4">
          <input
            v-model="techInput"
            type="text"
            placeholder="Super Awesome Project"
            class="py-3 px-4 rounded-2xl ring-1 ring-gray-300 text-lg flex-1"
          />
          <span
            class="
              p-1
              flex flex-row
              items-center
              space-x-2
              bg-gray-100
              rounded-3xl
            "
          >
            <label
              v-for="color in colors"
              :key="color.id"
              class="flex flex-row font-bold space-x-2 px-4 py-2 rounded-3xl"
              :class="'bg-' + color + '-200 text-' + color + '-600'"
            >
              <p>{{ color }}</p>
              <input v-model="techColor" type="radio" :value="color" />
            </label>
          </span>
          <button class="text-blue-500 hover:text-blue-700" @click="addTech()">
            Add
          </button>
        </span>
      </label>
      <label class="flex flex-col font-bold">
        <p class="text-sm text-gray-600 mb-2 ml-4">Description</p>
        <textarea
          v-model="project.information"
          placeholder="Super Awesome Project"
          class="py-3 px-4 rounded-2xl ring-1 ring-gray-300 text-lg"
        >
        </textarea>
      </label>
      <div class="flex flex-row space-x-6">
        <label class="flex flex-col flex-1 font-bold">
          <p class="text-sm text-gray-600 mb-2 ml-4">Website</p>
          <input
            v-model="project.website"
            type="text"
            placeholder="Super Awesome Project"
            class="py-3 px-4 rounded-2xl ring-1 ring-gray-300 text-lg flex-1"
          />
        </label>
        <label class="flex flex-col flex-1 font-bold">
          <p class="text-sm text-gray-600 mb-2 ml-4">GitHub</p>
          <input
            v-model="project.github"
            type="text"
            placeholder="Super Awesome Project"
            class="py-3 px-4 rounded-2xl ring-1 ring-gray-300 text-lg flex-1"
          />
        </label>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  layout: "dashboard",
  data() {
    return {
      techInput: null,
      techColor: null,
      project: {
        id: 1,
        title: null,
        techs: [],
        information: null,
        website: null,
        github: null,
        image: null,
      },
      colors: ["blue", "red", "green", "yellow"],
    };
  },
  methods: {
    addTech() {
      this.project.techs.push({ name: this.techInput, color: this.techColor });
    },
    removeTech(tech) {
      var index = this.project.techs.findIndex(function(item, i){
        return item.name === tech
      })
      this.project.techs.splice(index,1)
    },
  },
};
</script>