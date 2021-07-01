<template>
    <div class="w-full p-16 mt-16 flex flex-col items-center justify-center rounded-t-3xl bg-gray-700">
        <h3 class="text-gray-50 text-3xl">Kenneth Bass</h3>
        <div class="flex flex-row space-x-10 text-gray-50 mt-6">
            <NuxtLink to="/">Portfolio</NuxtLink>
            <NuxtLink to="/Contact">Contact</NuxtLink>
        </div>
        <div class="flex flex-row space-x-10 text-gray-50 mt-6">
            <NuxtLink v-if="this.$auth.loggedIn" to="/Login?type=signOut" class="py-2 px-4 rounded-3xl bg-blue-600 text-white">Logout</NuxtLink>
            <NuxtLink v-else to="/Login" class="py-2 px-4 rounded-3xl bg-blue-600 text-white">Login</NuxtLink>
        </div>
    </div>
</template>