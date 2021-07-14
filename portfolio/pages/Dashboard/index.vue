<template>
  <section class="w-full h-full flex-1 flex flex-col md:grid grid-cols-6">
    <article
      class="
        md:col-span-2
        md:h-full
        flex flex-col
        bg-gray-100
        border-r border-b border-gray-300
      "
    >
      <div class="flex-1 w-full">
        <h2
          class="
            pl-4
            py-2
            font-bold
            truncate
            text-sm
            bg-blue-100
            text-blue-600
            border-b border-gray-300
          "
        >
          New Portfolio Item
        </h2>
        <div class="h-96 md:h-auto overflow-y-auto">
          <div class="py-4 px-2 bg-white border-b border-gray-300">
            <label>
              <p class="pl-4 pb-2 text-xs font-bold text-gray-700">Title</p>
              <input
                v-model="project.title"
                class="
                  w-full
                  py-2
                  px-4
                  rounded-2xl
                  border border-gray-300
                  focus:border-blue-600
                  focus:bg-blue-50
                  outline-none
                "
                type="text"
              />
            </label>
          </div>
          <div class="py-4 px-2 bg-white border-b border-gray-300">
            <label>
              <p class="pl-4 pb-2 text-xs font-bold text-gray-700">
                Technologies
              </p>
              <div class="flex flex-row">
                <input
                  v-model="techInput"
                  class="
                    flex-1
                    w-full
                    py-2
                    px-4
                    rounded-l-2xl
                    border border-gray-300
                    focus:border-blue-600
                    focus:bg-blue-50
                    outline-none
                  "
                  type="text"
                />
                <span class="relative">
                  <button
                    class="
                      py-2
                      px-4
                      flex
                      flex-row
                      items-center
                      rounded-r-2xl
                      border-t border-b border-r border-gray-300
                      text-blue-600
                      bg-blue-50
                    "
                    @click="techDrop = !techDrop"
                  >
                    <span class="mr-2">
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
                    </span>
                    Colors
                  </button>
                  <ul v-if="techDrop" class="absolute top-12 p-4 rounded-2xl border border-gray-300 bg-white">
                    <li v-for="color in colors" :key="color.id">
                      <label class="py-1 flex flex-row items-center">
                        <input v-model="techColor" type="radio" :value="color" name="color" class="mr-2">
                        <p class="text-sm">{{color}}</p>
                      </label>
                    </li>
                  </ul>
                </span>
                <button class="ml-4 flex-0 text-sm text-blue-600 pr-2" @click="addTech()">
                  Add
                </button>
              </div>
            </label>
            <div
              class="
                w-full
                mt-4
                p-2
                rounded-2xl
                bg-gray-50
                border border-gray-300
              "
            >
              <Pills v-if="project.techs.length > 0">
                <Pill
                  v-for="tech in project.techs"
                  :key="tech.id"
                  :class="
                    'bg-' + tech.color + '-200 text-' + tech.color + '-600'
                  "
                >
                  {{ tech.name }}
                  <button
                    class="inline text-red-600"
                    @click="removeTech(tech.name)"
                  >
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
              <p v-else class="text-gray-900 text-xs w-full text-center">
                No Technologies
              </p>
            </div>
          </div>
          <div class="py-4 px-2 bg-white border-b border-gray-300">
            <label>
              <p class="pl-4 pb-2 text-xs font-bold text-gray-700">
                Information
              </p>
              <input
                v-model="project.information"
                class="
                  w-full
                  py-2
                  px-4
                  rounded-2xl
                  border border-gray-300
                  focus:border-blue-600
                  focus:bg-blue-50
                  outline-none
                "
                type="text"
              />
            </label>
          </div>
          <div class="py-4 px-2 bg-white border-b border-gray-300">
            <label>
              <p class="pl-4 pb-2 text-xs font-bold text-gray-700">GitHub</p>
              <input
                v-model="project.github"
                class="
                  w-full
                  py-2
                  px-4
                  rounded-2xl
                  border border-gray-300
                  focus:border-blue-600
                  focus:bg-blue-50
                  outline-none
                "
                type="text"
              />
            </label>
          </div>
          <div class="py-4 px-2 bg-white border-b border-gray-300">
            <label>
              <p class="pl-4 pb-2 text-xs font-bold text-gray-700">Website</p>
              <input
                v-model="project.website"
                class="
                  w-full
                  py-2
                  px-4
                  rounded-2xl
                  border border-gray-300
                  focus:border-blue-600
                  focus:bg-blue-50
                  outline-none
                "
                type="text"
              />
            </label>
          </div>
          <div class="py-4 px-2 bg-white border-b border-gray-300">
            <label>
              <p class="pl-4 pb-2 text-xs font-bold text-gray-700">Image</p>
              <ik-upload :onError="onError" :onSuccess="onSuccess" />
            </label>
          </div>
        </div>
      </div>
      <div
        class="
          py-4
          px-2
          flex
          items-center
          justify-center
          bg-white
          border-t border-gray-300
        "
      >
        <button class="py-2 px-4 rounded-2xl bg-blue-500 text-white">
          Add To Portfolio
        </button>
      </div>
    </article>
    <article class="md:col-span-4 md:h-full flex flex-col">
      <div class="h-full w-full">
        <h2
          class="
            pl-4
            py-2
            font-bold
            truncate
            text-sm
            bg-blue-100
            text-blue-600
            border-b border-gray-300
          "
        >
          Preview
        </h2>
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
        </div>
      </div>
    </article>
  </section>
</template>
<script>
export default {
  layout: "dashboard",
  data() {
    return {
      techDrop: false,
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
      var index = this.project.techs.findIndex(function (item, i) {
        return item.name === tech;
      });
      this.project.techs.splice(index, 1);
    },
    onError(err) {
      console.log('Error')
      console.log(err)
    },
    onSuccess(res) {
      this.product.image = res.filePath
    },
  },
};
</script>
