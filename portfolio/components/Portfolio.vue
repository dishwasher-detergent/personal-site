<template>
    <div class="w-full flex flex-col">
        <div class="flex flex-row h-32">
            <div class="flex-1 bg-gray-100">
                <div class=" h-full rounded-br-3xl bg-white"></div>
            </div>
            <div class="w-48 flex-none bg-gray-100 rounded-t-full flex flex-col items-center justify-center text-2xl text-blue-600">
                <h2>Projects</h2>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            <div class="flex-1 bg-gray-100">
                <div class="w-full h-full rounded-bl-3xl bg-white"></div>
            </div>
        </div>
        <div class="w-full rounded-3xl p-4 md:p-12 lg:p-24 bg-gray-100">
            <Project/>
        </div>
    </div>
</template>