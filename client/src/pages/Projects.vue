<script setup lang="ts">
import { ref } from 'vue';
import { Project } from "../types/types"
import SoulJournal from "../components/SoulJournal.vue"
import RoutineTracker from '../components/RoutineTracker.vue';

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
        <template v-if="project == Project.SoulJournal">
            <SoulJournal />
        </template>
        <template v-if="project == Project.RoutineTracker">
            <RoutineTracker />
        </template>
        <div class="bg"></div>
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
    z-index: 2;
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

.bg {
    position: absolute;
    z-index: 0;
    bottom: -50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 350px;
    background-color: #1b1b1b;
    opacity: 0.3;
    background-size: 21px 21px;
    background-image: repeating-linear-gradient(45deg, #67e8f9 0, #67e8f9 2.1px, #1b1b1b 0, #1b1b1b 50%);

    animation: roll 1s;

}

@keyframes appear {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes roll {
    from {
        width: 0;
    }

    to {
        width: 100vw;
    }
}
</style>
