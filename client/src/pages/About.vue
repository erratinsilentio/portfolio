<script setup lang="ts">
import { onMounted, ref } from 'vue';
import gsap from "gsap";

const creative = ['c', 'r', 'e', 'a', 't', 'i', 'v', 'e']
const letter = ref(null)

onMounted(() => {
    gsap.to(letter.value, {
        y: 0,
        stagger: 0.05,
        delay: .7,
        duration: .1,
    })
})
</script>

<template>
    <main>
        <p class="hello">Hello, I am...</p>
        <p class="developer">
            <span v-for="char in creative" ref="letter" class="creative">{{ char }}</span>
            <span class="frontend">frontend developer...</span>
        </p>
        <p class="backend">
            ( ...interested in backend technologies )
        </p>
        <div class="bg"></div>
    </main>
</template>

<style scoped>
main {
    width: 100vw;
    height: 80vh;
    padding: 50px;
    animation: appear 1s;
    position: relative;
    z-index: 0;
}

.hello {
    color: #06b6d4;
    padding-left: 50px;
    position: relative;
    z-index: 2;
}

.developer {
    font-size: 70px;
    padding-left: 100px;
    margin-bottom: 0;
    position: relative;
    z-index: 2;
}

.creative {
    color: #be185d;
    transform: translateY(115px);
    transition: transform .5s;
    position: relative;
    z-index: 2;
}

.frontend {
    margin-left: 20px;
    color: #06b6d4;
    position: relative;
    z-index: 2;
}

.backend {
    color: #0e7490;
    font-size: 60px;
    text-align: right;
    margin-right: 150px;
    position: relative;
    z-index: 2;
}

.bg {
    position: absolute;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 900px;
    height: 400px;
    background-color: #18181b;
    opacity: 0.3;
    background-image: radial-gradient(#fdba74 1.6px, transparent 1.6px), radial-gradient(#fdba74 1.6px, #18181b 1.6px);
    background-size: 64px 64px;
    background-position: 0 0, 32px 32px;
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
