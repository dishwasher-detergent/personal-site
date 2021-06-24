<template>
    <a
        @mouseover="hoverButtons"
        ref="button"
        target="_blank"
        :href="website"
        :class="'w-24 py-2 px-4 inline-block relative ' 
        + (github ? 'rounded-r-3xl rounded-l' : 'rounded-3xl') + 
        ' bg-blue-600 text-white'
        "
    >
        <slot></slot>
    </a>
</template>
<script>
export default {
    props: [
        'github',
        'website'
    ],
    data(){
        return{
            hovered: false
        }
    },
    methods: {
        hoverButtons(){
            this.$anime({
                // targets: this.$refs.button,
                // borderRadius: '50px',
                // keyframes: [
                //     {translateY: -125,},
                //     {translateX: -175},
                // ],
                // duration: 4000,
                // easing: 'easeOutElastic(1, .8)',
            }); 
        }
    }
}
</script>