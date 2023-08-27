<script setup lang="ts">
import { ref } from 'vue';

const logos = ["nextjs", "typescript", "redux", "tailwind", "framer"]

const redirVisible = ref(false);

const toggleRedir = (visible: boolean) => {
    redirVisible.value = visible;
};
</script>

<template>
    <section class="info">
        <section class="left">
            <a href="https://soul-journal.vercel.app/" target="_blank" class="a-screen">
                <img src="../assets/souljournal.png" alt="project" class="screen" @mouseover="toggleRedir(true)"
                    @mouseout="toggleRedir(false)" />
                <img v-if="redirVisible" src="/redirect.svg" alt="redirect" class="redir" />

            </a>
            <div class="bg-img" :class="{ lighter: redirVisible }"></div>
            <section class="technologies">
                <p class="heading tech">#TECHNOLOGIES</p>
                <section class="logos">
                    <img v-for="logo in logos" :src="`/${logo}.svg`" alt="logo" class="logo" />
                </section>
            </section>
        </section>
        <section class="right">
            <p class="heading">#ABOUT</p>
            <p class="text">Digital version of my personal journaling schema, embracing the stoic principles of life.
                <a href="https://github.com/erratinsilentio/Soul-Journal" target="_blank" class="github">open on github</a>
            </p>
            <p class="heading">#WHY?</p>
            <p class="text">Main idea was to explore Next.js with it's new app router, as well as to learn Tailwind CSS.
            </p>
            <p class="heading">#CHALLENGES</p>
            <p class="text">Working with Postgresql database was new to me. I spent some time planning the tables and
                relations to
                make it fast and rational. Second biggest challenge was finishing the project - I mean spending enough
                time on the details, but not getting lost on the journey!</p>
        </section>
    </section>
</template>

<style scoped>
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
    height: 47.5%;
    background-color: white;
    top: 10%;
    left: 10%;
    z-index: 1;
    background-color: #1b1b1b;
    opacity: 0.7;
    background: repeating-linear-gradient(-45deg, #cffafe, #cffafe 2px, #1b1b1b 2px, #1b1b1b 10px);
}

.lighter {
    opacity: 1;
}

.redir {
    position: absolute;
    z-index: 3;
    width: 30%;
    height: 30%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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

.github {
    margin: 0;
    margin-left: 10px;
    color: #059669
}

.github:hover {
    filter: brightness(120%);
    text-decoration: underline;
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
    position: relative;
}

.screen {
    width: 100%;
    z-index: 2;
}
</style>