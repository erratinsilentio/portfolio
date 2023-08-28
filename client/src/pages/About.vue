<script setup>
import { onMounted, ref } from 'vue';
import gsap from "gsap";

const creative = ['c', 'r', 'e', 'a', 't', 'i', 'v', 'e']
const letter = ref(null)
const targetElement = ref(null)

onMounted(() => {
    gsap.to(letter.value, {
        y: 0,
        stagger: 0.05,
        delay: .7,
        duration: .1,
    })
})

const scrollToElement = () => {
    if (targetElement.value) {
        targetElement.value.scrollIntoView({ behavior: 'smooth' });
    }
};

</script>

<template>
    <main class="main-one">
        <p class="hello">Hello, I am...</p>
        <p class="developer">
            <span v-for="char in creative" ref="letter" class="creative">{{ char }}</span>
            <span class="frontend">frontend developer...</span>
        </p>
        <p class="backend">
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
                <p class="heading">#EXPERIENCE</p>
                <article class="pizzeria">
                    <p class="title">* <span class="job">Pizzeria Stopiatka</span> - 2020 till now - <span
                            class="green">Pizzerman</span>,
                        <span>Waiter</span>, <span class="red">Delivery man</span>
                    </p>
                    <p class="description"><span class="blue">What I learned?</span> Many important and universal skills.
                        First of all
                        hard work,
                        often around 250 hours a month. I finally understood how important is working as a team. This leads
                        to
                        proper and honest communication, also with a client. Being patient and organized helps everyone.
                        Especially important when you work under the pressure of time (happens often in a restaurant).</p>
                </article>
                <article class="neuron">
                    <p class="title">* <span class="job">Neuron Foundation</span> - 2023.01 - 2023.06 -
                        <span class="green">Junior Frontend Developer</span>
                    </p>
                    <p class="description dev"><span class="learned">What I learned?</span> Working in a large codebase,
                        created by many people. Scrum and kanban methodology, as well as working on a code with a team. I
                        scratched the surface of new technologies like AWS, and felt comfortable with github workflow. I
                        participated in meetings, where we discussed our tickets and future ideas.
                    </p>
                </article>
            </section>
            <section class="right">
                <p class="heading">#ABOUT MYSELF</p>
                <article class="frontend">
                    <p class="description-right">* My journey with <span class="green">programming</span> beginned in August
                        2022</p>
                    <p class="description-right">* What started as a career idea, became a <span class="blue">genuine
                            passion</span></p>
                    <p class="description-right">* I am curious about <span class="red">backend development</span>, there
                        are many areas in IT that
                        I
                        want to get better at</p>
                    <p class="description-right">* I enjoy <span class="green">helping other people</span> and don’t seek
                        conflicts</p>
                    <p class="description-right">* I have <span class="blue">2 cats</span>, that can’t wait till I start
                        working from home</p>
                    <p class="description-right">* I love <span class="red">music</span> and <span class="red">music
                            production</span> - I recorded my first vocals when I was
                        13
                        years old</p>
                    <p class="description-right">* <span class="blue">Mental challenges</span> keep me <span
                            class="green">motivated</span> and <span class="green">disciplined</span></p>
                    <p class="description-right">* Last year I ran an 85km <span class="red">ultramarathon</span></p>
                    <p class="description-right">* My end goal is always becoming a <span class="blue">better human
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
    background-color: #be185d;
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

.arrow-btn {
    position: absolute;
    bottom: 8%;
    left: 50%;
    transform: translateX(-100%);
    background-color: transparent;
}

.arrow {
    width: 40px;
    filter: invert(82%) sepia(25%) saturate(854%) hue-rotate(168deg) brightness(110%) contrast(98%);
    opacity: 0.5;
    transition-duration: 0.2s;
    animation: blink 1.2s infinite;
}

.arrow:hover {
    transform: scale(1.5);
    filter: invert(96%) sepia(92%) saturate(1863%) hue-rotate(172deg) brightness(101%) contrast(99%);
}

.inside {
    position: relative;
    min-width: 97vw;
    min-height: 95vh;
    background-color: #18181b;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    /* align-items: center; */
    /* animation: shorter 1s; */
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
    background-color: #be185d;
}

.pidzi {
    position: absolute;
    bottom: 0;
    left: -10px;
    width: 200px;
    filter: invert(25%) sepia(39%) saturate(3000%) hue-rotate(313deg) brightness(80%) contrast(106%);
}

.pogi {
    position: absolute;
    right: -30px;
    top: -100px;
    width: 300px;
    filter: invert(25%) sepia(39%) saturate(3000%) hue-rotate(313deg) brightness(80%) contrast(106%);
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
</style>
