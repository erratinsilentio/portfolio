<script setup>
import { onMounted, ref } from 'vue';
import gsap from "gsap";
import { observer } from "../utils/observer"


const creative = ['c', 'r', 'e', 'a', 't', 'i', 'v', 'e']
const letter = ref(null)
const targetElement = ref(null)

onMounted(() => {
    gsap.to(letter.value, {
        y: 0,
        stagger: 0.05,
        delay: .3,
        duration: .1,
    })

    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach((el) => observer.observe(el))
})

const scrollToElement = () => {
    if (targetElement.value) {
        targetElement.value.scrollIntoView({ behavior: 'smooth' });
    }
};

</script>

<template>
    <main class="main-one">
        <p class="hello" v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0, scale: 1 }"
            :variants="{ custom: { scale: 2 } }" :hovered="{ scale: 1.2 }" :delay="200">Hello, I am...</p>
        <p class="developer">
            <span class="container">
                <div v-for="char in creative" ref="letter" class="creative">{{ char }}</div>
            </span>
            <span class="frontend">frontend developer...</span>
        </p>
        <p class="backend hidden">
            ( ...interested in backend technologies )
        </p>
        <div class="bg"></div>
        <button class="arrow-btn" @click="scrollToElement">
            <img src="../assets/arrow.svg" alt="arrow" class="arrow" />
        </button>
    </main>
    <main class="main-two" ref="targetElement">
        <section class="inside" ref="insideElement">
            <section class="left">
                <p class="heading hidden">#EXPERIENCE</p>
                <article class="pizzeria">
                    <p class="title hidden">* <span class="job">Pizzeria Stopiatka</span> - 2020 till now - <span
                            class="green">Pizzerman</span>,
                        <span>Waiter</span>, <span class="red">Delivery man</span>
                    </p>
                    <p class="description hidden"><span class="blue">What I learned?</span> Many important and universal
                        skills.
                        First of all
                        hard work,
                        often around 250 hours a month. I finally understood how important is working as a team. This leads
                        to
                        proper and honest communication, also with a client. Being patient and organized helps everyone.
                        Especially important when you work under the pressure of time (happens often in a restaurant).</p>
                </article>
                <article class="neuron">
                    <p class="title hidden">* <span class="job">Neuron Foundation</span> - 2023.01 - 2023.06 -
                        <span class="green">Junior Frontend Developer</span>
                    </p>
                    <p class="description dev hidden"><span class="blue">What I learned?</span> Working in a large codebase,
                        created by many people. Scrum and kanban methodology, as well as working on a code with a team. I
                        scratched the surface of new technologies like AWS, and felt comfortable with github workflow. I
                        participated in meetings, where we discussed our tickets and future ideas.
                    </p>
                </article>
            </section>
            <section class="right">
                <p class="heading hidden">#ABOUT MYSELF</p>
                <article class="frontend">
                    <p class="description-right hidden">* My journey with <span class="green">programming</span> beginned in
                        August
                        2022</p>
                    <p class="description-right hidden">* What started as a career idea, became a <span class="blue">genuine
                            passion</span></p>
                    <p class="description-right hidden">* I am curious about <span class="red">backend development</span>,
                        there
                        are many areas in IT that
                        I
                        want to get better at</p>
                    <p class="description-right hidden">* I enjoy <span class="green">helping other people</span> and don’t
                        seek
                        conflicts</p>
                    <p class="description-right hidden">* I have <span class="blue">2 cats</span>, that can’t wait till I
                        start
                        working from home</p>
                    <p class="description-right hidden">* I love <span class="red">music</span> and <span class="red">music
                            production</span> - I recorded my first vocals when I was
                        13
                        years old</p>
                    <p class="description-right hidden">* <span class="blue">Mental challenges</span> keep me <span
                            class="green">motivated</span> and <span class="green">disciplined</span></p>
                    <p class="description-right hidden">* Last year I ran an <span class="green">85km</span> <span
                            class="red">ultramarathon</span></p>
                    <p class="description-right hidden">* My end goal is always becoming a <span class="blue">better human
                            being</span></p>
                </article>
            </section>
            <span class="border"></span>
            <img src="/pidzi3.svg" alt="cat" class="pidzi" />
            <img src="/pogo1.svg" alt="cat" class="pogi" />
        </section>
    </main>
</template>

<style scoped>
.main-one {
    width: 100vw;
    height: 80vh;
    padding: 50px;
    animation: appear 1s;
    position: relative;
    z-index: 0;
}

.main-two {
    min-width: 100vw;
    min-height: 100vh;
    animation: appear 1s;
    position: relative;
    z-index: 0;
    background-color: #881337;
    display: flex;
    justify-content: center;
    align-items: center;
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
    display: flex;
    flex-direction: row;
}

.container {
    display: flex;
    flex-direction: row;
    overflow: hidden;
}

.creative {
    color: #be185d;
    transform: translateY(115px);
    transition: transform .5s;
    position: relative;
    z-index: 2;
    margin: 0;
    width: 20px;
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
    animation: blink_slow 20s infinite;
}

.arrow-btn {
    position: absolute;
    bottom: 8%;
    left: 48.5%;
    transform: translateX(-100%);
    background-color: transparent;
}

.arrow {
    transform: translateZ(0);
    width: 40px;
    filter: invert(82%) sepia(25%) saturate(854%) hue-rotate(168deg) brightness(110%) contrast(98%);
    opacity: 0.5;
    transition-duration: 0.2s;
    animation: blink 1.2s infinite;
}

.arrow:hover {
    transform: scale(1.5);
}

.inside {
    position: relative;
    min-width: 97vw;
    min-height: 95vh;
    height: 0;
    background-color: #18181b;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.left {
    width: 40%;
    min-height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
}

.pizzeria {
    width: 90%;
    display: flex;
    flex-direction: column;
}

.title {
    color: white;
    margin: 0;
    margin-bottom: 15px;
    font-size: 24px;
}

.description {
    font-size: 20px;
    color: white;
    margin: 0;
    letter-spacing: 2px;
}

.description-right-p {
    padding-right: 60px;
    padding-bottom: 10px;
    font-size: 20px;
    color: white;
    margin: 0;
    letter-spacing: 2px;
}

.description-right {
    padding-bottom: 10px;
    font-size: 20px;
    color: white;
    margin: 0;
    letter-spacing: 2px;
}

.dev {
    margin-left: 60px;
}

.green {
    color: #22c55e;
}

.red {
    color: #e11d48;
}

.job {
    text-decoration: underline;
}

.blue {
    color: #67e8f9;
}

.neuron {
    margin-top: 30px;
    width: 90%;
    display: flex;
    flex-direction: column;
}

.right {
    width: 40%;
    min-height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.heading {
    color: white;
    height: 55px;
    width: 200px;
    text-align: center;
    font-size: 40px;
    border-bottom: 2px solid #be185d;
}

.border {
    height: 75vh;
    width: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #881337;
}

.pidzi {
    position: absolute;
    bottom: 0;
    left: -10px;
    width: 200px;
    /* filter: invert(25%) sepia(39%) saturate(3000%) hue-rotate(313deg) brightness(80%) contrast(106%); */
}

.pogi {
    position: absolute;
    right: -30px;
    top: -100px;
    width: 300px;
    /* filter: invert(25%) sepia(39%) saturate(3000%) hue-rotate(313deg) brightness(80%) contrast(106%); */
}

.hidden {
    opacity: 0;
    filter: blur(5px);
    transform: translateY(100%);
    transition: all 1s;
}

.show {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
}

.description-right:nth-child(2) {
    transition-delay: 200ms;
}

.description-right:nth-child(3) {
    transition-delay: 300ms;
}

.description-right:nth-child(4) {
    transition-delay: 400ms;
}

.description-right:nth-child(5) {
    transition-delay: 500ms;
}

.description-right:nth-child(6) {
    transition-delay: 600ms;
}

.description-right:nth-child(7) {
    transition-delay: 700ms;
}

.description-right:nth-child(8) {
    transition-delay: 800ms;
}

.description-right:nth-child(9) {
    transition-delay: 900ms;
}

.title:nth-child(2) {
    transition-delay: 400ms;
}

.backend {
    transition-delay: 910ms;

}

.description:nth-child(2) {
    transition-delay: 200ms;
}

@media(prefers-reduced-motion) {
    .hidden {
        transition: none;
    }
}

@keyframes appear {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes blink {

    0% {
        opacity: 0
    }

    50% {
        opacity: 0.5
    }

    100% {
        opacity: 0
    }
}

@keyframes blink_slow {

    0% {
        width: 900px;
        opacity: 0.3
    }

    50% {
        width: 1100px;
        opacity: 0.5
    }

    100% {
        width: 900px;
        opacity: 0.3
    }
}

@keyframes shorter {
    from {
        width: 100vw;
        height: 100vh;
    }

    to {
        width: 95vw;
        height: 95vh;
    }
}

@media screen and (min-width: 561px) and (max-width: 1024px) {

    .main-one {
        padding: 0;
        padding-left: 20px;
        padding-right: 20px;
    }

    .main-two {
        min-width: 100vw;
        height: auto;
        animation: appear 1s;
        position: relative;
        z-index: 0;
        background-color: #881337;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

    .hello {
        text-align: center;
        color: #06b6d4;
        margin-top: 150px;
        margin-bottom: 50px;
        padding: 0;
        padding-right: 200px;
        position: relative;
        z-index: 2;
    }

    .developer {
        margin: 0;
        padding-left: 0;
        display: flex;
        justify-content: center;
        font-size: 65px;
        padding-left: -100px;
        margin-bottom: 0;
        margin-top: 50px;
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
        margin-right: 20px;
        color: #06b6d4;
        position: relative;
        z-index: 2;
    }

    .backend {
        color: #0e7490;
        font-size: 60px;
        text-align: center;
        margin: 0;
        letter-spacing: 3px;
        margin-top: 50px;
        position: relative;
        z-index: 2;
    }

    .bg {
        position: absolute;
        z-index: 0;
        top: 38%;
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

    .arrow-btn {
        position: absolute;
        bottom: 15%;
        left: 51%;
        transform: translateX(-100%);
        background-color: transparent;
    }

    .inside {
        margin-top: 30px;
        margin-bottom: 30px;
        padding-top: 20px;
        position: relative;
        min-width: 97vw;
        height: auto;
        background-color: #18181b;
        display: flex;
        flex-direction: column;
    }

    .left {
        text-align: center;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        z-index: 2;
    }

    .neuron {
        margin-top: 30px;
        width: 90%;
        display: flex;
        flex-direction: column;
    }

    .dev {
        margin-left: 0px;
    }

    .right {
        padding-top: 20px;
        width: 100%;
        margin-bottom: 150px;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .heading {
        color: white;
        height: 55px;
        width: 200px;
        text-align: center;
        font-size: 40px;
        border-bottom: 2px solid #be185d;
    }

    .border {
        display: none;
    }

    .pidzi {
        position: absolute;
        bottom: 0px;
        left: -30px;
        width: 200px;
        filter: invert(25%) sepia(39%) saturate(3000%) hue-rotate(313deg) brightness(80%) contrast(106%);
    }

    .pogi {
        position: absolute;
        right: -30px;
        top: -90px;
        width: 300px;
        filter: invert(25%) sepia(39%) saturate(3000%) hue-rotate(313deg) brightness(80%) contrast(106%);
    }
}

@media screen and (min-width: 390px) and (max-width: 560px) {

    .main-one {
        width: 100vw;
        height: 90vh;
        padding: 0;
        animation: appear 1s;
        position: relative;
        z-index: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .main-two {
        margin-top: 30px;
        min-width: 100vw;
        min-height: 100vh;
        animation: appear 1s;
        position: relative;
        z-index: 0;
        background-color: #881337;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }

    .hello {
        text-align: center;
        color: #06b6d4;
        margin-top: 50px;
        margin-bottom: 30px;
        padding: 0;
        padding-right: 200px;
        position: relative;
        z-index: 2;
    }

    .developer {
        width: 100%;
        margin: 0;
        letter-spacing: 3px;
        font-size: 65px;
        margin-bottom: 0;
        position: relative;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-left: 0;
    }

    .container {
        display: flex;
        justify-content: center;
    }

    .creative {
        color: #be185d;
        transform: translateY(115px);
        transition: transform .5s;
        position: relative;
        z-index: 2;
    }

    .frontend {
        color: #06b6d4;
        position: relative;
        z-index: 2;
        text-align: center;
        margin: 0;
    }

    .backend {
        color: #0e7490;
        font-size: 60px;
        text-align: center;
        margin: 0;
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 30px;
        position: relative;
        z-index: 2;
    }

    .arrow-btn {
        position: absolute;
        bottom: 5%;
        left: 55%;
        transform: translateX(-100%);
        background-color: transparent;
    }

    .inside {
        margin-top: 30px;
        margin-bottom: 30px;
        padding-top: 40px;
        position: relative;
        min-width: 97vw;
        height: auto;
        background-color: #18181b;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .left {
        text-align: center;
        width: 100%;
        min-height: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        z-index: 2;
    }

    .neuron {
        margin-top: 30px;
        width: 90%;
        display: flex;
        flex-direction: column;
    }

    .dev {
        margin-left: 0px;
    }

    .right {
        padding-top: 20px;
        width: 100%;
        min-height: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-bottom: 120px;
    }

    .heading {
        color: white;
        height: 55px;
        width: 200px;
        text-align: center;
        font-size: 40px;
        border-bottom: 2px solid #be185d;
    }

    .border {
        display: none;
    }

    .pidzi {
        position: absolute;
        bottom: 0px;
        left: -30px;
        width: 200px;
        filter: invert(25%) sepia(39%) saturate(3000%) hue-rotate(313deg) brightness(80%) contrast(106%);
    }

    .pogi {
        position: absolute;
        right: -30px;
        top: -90px;
        width: 300px;
        filter: invert(25%) sepia(39%) saturate(3000%) hue-rotate(313deg) brightness(80%) contrast(106%);
    }
}
</style>
