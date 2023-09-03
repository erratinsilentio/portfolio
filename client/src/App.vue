<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Header from './components/Header.vue';
import About from './pages/About.vue'
import Projects from './pages/Projects.vue'
import Contact from './pages/Contact.vue'
import Notification from './components/Notification.vue';
import { store } from './store/store';
import { Page } from './types/types';

</script>

<template>
    <body>
        <Header></Header>
        <Navbar></Navbar>
        <template v-if="store.notificationStatus">
            <Notification></Notification>
        </template>
        <template v-if="store.page === Page.About">
            <About />
        </template>
        <template v-if="store.page === Page.Projects">
            <Projects />
        </template>
        <template v-if="store.page === Page.Contact">
            <Contact />
        </template>
    </body>
</template>

<style scoped></style>
