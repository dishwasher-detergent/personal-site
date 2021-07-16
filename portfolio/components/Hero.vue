<template>
    <div 
        class="w-full flex items-center justify-center relative overflow-hidden rounded-3xl py-16 md:py-48 px-6 md:px-24 bg-gradient-to-br"
        :class="{
            'from-yellow-200 to-red-200' : from == 'yellow',
            'from-blue-200 to-red-200' : from == 'blue',
            'from-green-200 to-red-200' : from == 'green'
         }"
     >
        <div class="flex flex-col md:flex-row h-full w-full">
            <div>
                <h1 class="text-6xl md:text-9xl">
                    <slot name="title"></slot>
                </h1>
                <p class="md:text-xl">
                    <slot name="sub"></slot>
                </p>
            </div>
            <div class="w-full h-full mt-8 md:mt-0 md:ml-16">
                <slot name="extra-content"></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['from','to']
}
</script>
<style scoped>
    div {
        background-size: 400% 400%;

        -webkit-animation: AnimationName 15s ease infinite;
        -moz-animation: AnimationName 15s ease infinite;
        animation: AnimationName 15s ease infinite;
    }

    @-webkit-keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @-moz-keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
    @keyframes AnimationName {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
</style>
