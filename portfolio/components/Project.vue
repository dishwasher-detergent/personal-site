<template>
  <div class="w-full space-y-16">
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
            projects: null
        }
    },
    created(){
        this.getProjects()
    },
    methods:{
        async getProjects(){
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