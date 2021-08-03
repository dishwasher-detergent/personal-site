<template>
  <div class="w-full flex flex-col lg:flex-row">
    <div class="md:flex-none w-full md:w-96 mr-4">
      <div class="pt-6 top-0 sticky">
        <h1 class="md:ml-6 mb-2 font-bold text-6xl text-blue-600 truncate">
          {{ projects.title }}
        </h1>
        <div class="w-full p-4 rounded-2xl bg-gray-100">
          <PortfolioProjectPills>
            <PortfolioProjectPill
              v-for="tech in projects.tech"
              :key="tech.id"
              :class="'bg-' + tech.color + '-200 text-' + tech.color + '-600'"
            >
              {{ tech.name }}
            </PortfolioProjectPill>
          </PortfolioProjectPills>
          <p class="pt-4">
            {{ projects.information }}
          </p>
        </div>
        <div class="ml-6 pt-4">
          <PortfolioProjectLink
            :website="projects.website"
            :github="projects.github"
          />
        </div>
      </div>
    </div>
    <div class="py-6 md:flex-1 space-y-4">
      <div v-for="image in projects.image_gallery" :key="image.id" class="border rounded-3xl overflow-hidden">
        <PortfolioProjectImage :alt="image" :image="image" res="high"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: {
        title: null,
        tech: [],
        information: null,
        website: null,
        github: null,
        image: null,
        image_gallery: null,
      },
    };
  },
  async asyncData({ params }) {
    const slug = params.slug;
    return { slug };
  },
  mounted() {
    this.getProjects();
  },
  methods: {
    async getProjects() {
      try {
        let { data: projects, error } = await this.$supabase
          .from("projects")
          .select("*")
          .eq("id", this.slug);
        if (error) {
          throw error;
        } else {
          this.projects = projects[0];
          this.projects.image_gallery.push(this.projects.image)
          this.projects.image_gallery.reverse()
        }
      } catch (error) {
        this.$notify({ type: "error", text: error });
        this.projects = [
          {
            title: "Error",
            tech: [
              {
                name: "Error",
                color: "red",
              },
            ],
            information: err,
          },
        ];
      }
    },
  },
};
</script>
