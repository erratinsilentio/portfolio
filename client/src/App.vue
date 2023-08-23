<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import Header from './components/Header.vue'
import About from './pages/About.vue'
import { store } from './store/store';
import { Page } from './types/types';

</script>

<template>
    <body>
        <Header></Header>
        <Navbar></Navbar>
        <template v-if="store.page === Page.About">
            <About />
        </template>
    </body>
</template>

<style scoped></style>
