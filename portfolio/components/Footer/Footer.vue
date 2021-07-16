<template>
    <div class="w-full p-8 mt-16 flex flex-col md:flex-row items-center justify-start rounded-t-3xl bg-gray-900 text-white space-x-4">
        <h2 class="md:pr-4 text-gray-50 text-3xl md:border-r-2 border-white">Kenneth Bass</h2>
        <FooterButton to="/" text="Portfolio"/>
        <FooterButton to="/Contact" text="Contact"/>
        <FooterButton v-if="this.$auth.loggedIn" to="/Dashboard" text="Dashboard"/>
        <FooterButton v-if="this.$auth.loggedIn" to="/Login?type=signOut" text="Logout"/>
        <FooterButton v-else to="/Login" text="Login"/>
    </div>
</template>