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
    data(){
        return{
            projects: null,
        }
    },
    created(){
        this.getProjects()
    },
    methods:{
        async getProjects(){
            this.projects = [{
                    title: 'Error',
                    tech: [{
                        name: 'Error',
                        color: 'red'
                    }],
                    information: "There was an error retrieving the projects, please try again later.",
                }]
            let { data: projects, error } = await this.$supabase
                .from('projects')
                .select('*')
            if (error) {
                console.error(error)
            } else {
                this.projects = projects
            }
        }
    }
}
</script>
