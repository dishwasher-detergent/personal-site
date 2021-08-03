<template>
    <span>
        <a
            v-if="github"
            ref="github"
            target="_blank"
            :href="'https://github.com/' + github"
            :class="'w-24 py-2 px-4 inline-block relative text-center '
            + (website ? 'rounded-l-3xl rounded-r' : 'rounded-3xl') +
            ' bg-gray-900 text-white'
            "
        >
            Github
        </a>
        <a
            v-if="website"
            ref="website"
            target="_blank"
            :href="website"
            :class="'w-24 py-2 px-4 inline-block relative text-center '
            + (github ? 'rounded-r-3xl rounded-l' : 'rounded-3xl') +
            ' bg-blue-600 text-white'
            "
        >
            Website
        </a>
    </span>
</template>
<script>
export default {
    props: [
        'github',
        'website'
    ],
}
</script>