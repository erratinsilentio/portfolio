<script setup lang="ts">
import { ref } from 'vue';
import { Project } from "../types/types"

const logos = ["nextjs", "typescript", "redux", "tailwind", "framer"]
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
            <section class="left">
                <a href="youtube.com" class="a-screen">
                    <img src="../assets/souljournal.png" alt="project" class="screen" />
                </a>
                <div class="bg-img"></div>
                <section class="technologies">
                    <p class="heading tech">#TECHNOLOGIES</p>
                    <section class="logos">
                        <img v-for="logo in  logos " :src="`/${logo}.svg`" alt="logo" class="logo" />
                    </section>
                </section>
            </section>
            <section class="right">
                <p class="heading">#ABOUT</p>
                <p class="text">Digital version of my personal journaling schema, embracing the stoic principles of life.
                </p>
                <p class="heading">#WHY?</p>
                <p class="text">Main idea was to explore Next.js with it's new app router, as well as to learn Tailwind CSS.
                </p>
                <p class="heading">#CHALLENGES</p>
                <p class="text">Working with Postgresql database was new to me. I spent some time planning the tables and
                    relations to
                    make it fast and rational. Second biggest challenge was finishing the project - I mean spending enough
                    time on the details, and not getting lost on the journey!</p>
            </section>
        </section>
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

.info {
    border: 1px solid white;
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    width: 80vw;
    height: 75vh;
    z-index: 2;
    background-color: #1b1b1b;
    display: flex;
    flex-direction: row;
}

.left {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding-top: 20px;
    position: relative;
    z-index: 0;
}

.bg-img {
    position: absolute;
    width: 89%;
    height: 50%;
    background-color: white;
    top: 10%;
    left: 10%;
    z-index: 1;
    background-color: #1b1b1b;
    opacity: 0.7;
    background: repeating-linear-gradient(-45deg, #cffafe, #cffafe 2px, #1b1b1b 2px, #1b1b1b 10px);
}

.technologies {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
}

.tech {
    margin-left: 50px;
}

.logos {
    width: 100%;
    height: 80px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    background-color: #27272a;
    box-shadow: 2px 13px 36px -10px rgba(27, 27, 27, 1);

}

.logo {
    width: 60px;
}

.right {
    width: 40%;
    padding-left: 20px;
    padding-right: 20px;
}

.text {
    color: white;
    font-size: 25px;
    margin: 0px;
}

.heading {
    color: #0891b2;
    font-size: 25px;
    margin-bottom: 10px;
}


.a-screen {
    width: 90%;
    z-index: 2;
}

.screen {
    width: 100%;
    z-index: 2;
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
