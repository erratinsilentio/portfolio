<script setup lang="ts">
import { ref } from 'vue';
import { Project } from "../types/types"

const project = ref(Project.SoulJournal)

const setProject = (name: Project) => {
    project.value = name
    console.log(project.value)
}

</script>

<template>
    <main class="main-one">
        <section class="tabs">
            <button v-on:click="setProject(Project.SoulJournal)" class="tab-btn"
                :class="{ chosen: project === Project.SoulJournal }">{{ Project.SoulJournal }}</button>
            <button v-on:click="setProject(Project.RoutineTracker)" class="tab-btn"
                :class="{ chosen: project === Project.RoutineTracker }">{{ Project.RoutineTracker }}</button>
        </section>
        <section class="info">

        </section>
    </main>
</template>

<style scoped>
.main-one {
    width: 80vw;
    height: 80vh;
    padding-left: 10vw;
    padding-right: 10vw;
    padding-top: 2.5vw;
    animation: appear 1s;
    position: relative;
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.tabs {
    width: 80vw;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.tab-btn {
    margin-right: 20px;
    height: 50px;
    width: 200px;
    font-size: 24px;
    background-color: #0891b2;
}

.tab-btn:hover {
    filter: brightness(120%);
}

.chosen {
    background-color: white;
    outline: 1px solid white;
}

.info {
    border: 1px solid white;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    width: 80vw;
    height: 70vh;
}

@keyframes appear {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>
