<template>
  <div class="w-full" v-if="projects">
    <ProjectCard
      v-for="project in projects"
      :key="project.id"
      :title="project.title"
      :techs="project.tech"
      :information="project.information"
      :website="project.website"
      :github="project.github"
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
          .select("*");
        if (error) {
          throw error;
        } else {
          this.projects = projects;
        }
      } catch (err) {
        console.log(err);
        this.projects = [
          {
            title: "Error",
            tech: [
              {
                name: "Error",
                color: "red",
              },
            ],
            information:
              err,
          },
        ];
      }
    },
  },
};
</script>
