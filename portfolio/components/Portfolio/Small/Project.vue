<template>
  <div class="w-full flex flex-row flex-wrap flex-1 space-y-16" v-if="projects[0].title">
    <PortfolioSmallCard
      v-for="project in projects"
      :key="project.id"
      :id="project.id"
      :title="project.title"
      :techs="project.tech"
      :information="project.information"
      :website="project.website"
      :github="project.github"
      :image="project.image"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "",
          tech: [],
          information: "",
        },
      ],
    };
  },
  created() {
    this.getProjects();
  },
  methods: {
    async getProjects() {
      try {
        let { data: projects, error } = await this.$supabase
          .from("projects")
          .select("*")
          .order("id", { ascending: false });
        if (error) {
          throw error;
        } else {
          this.projects = projects;
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