<script setup lang="ts">
import { onMounted, ref } from 'vue';
import gsap from "gsap";

const logos = ["vue", "typescript", "vitejs", "gsap", "postgresql"]

const redirVisible = ref(false);
const logo = ref(null)

const toggleRedir = (visible: boolean) => {
    redirVisible.value = visible;
};

onMounted(() => {
    gsap.to(logo.value, {
        opacity: 1,
        stagger: 0.25,
        delay: .2,
        duration: .7,
    })
})
</script>

<template>
    <section class="info">
        <section class="left">
            <a href="https://routine-tracker-xi.vercel.app" target="_blank" class="a-screen">
                <img src="../assets/routinetracker.png" alt="project" class="screen" @mouseover="toggleRedir(true)"
                    @mouseout="toggleRedir(false)" />
                <img v-if="redirVisible" src="/redirect.svg" alt="redirect" class="redir" />

            </a>
            <div class="bg-img" :class="{ lighter: redirVisible }"></div>
            <section class="technologies">
                <p class="heading tech">#TECHNOLOGIES</p>
                <section class="logos">
                    <img v-for=" logo  in  logos " :src="`/${logo}.svg`" alt="logo" class="logo" ref="logo" />
                </section>
            </section>
        </section>
        <section class="right">
            <p class="heading">#ABOUT</p>
            <p class="text">This is a <span class="yellow">workout logger</span>, with a section dedicated to each exercise
                used in a training plan.
                <a href="https://github.com/erratinsilentio/routine-tracker" target="_blank" class="github">open on
                    github</a>
            </p>
            <p class="heading">#WHY?</p>
            <p class="text">I wanted to learn <span class="green">Vue.js</span>, and familiarize myself with
                <span class="red">bodyweight</span>
                <span class="blue"> training exercises</span> at the same
                time.
            </p>
            <p class="heading">#CHALLENGES</p>
            <p class="text">Once again, creating <span class="yellow">tables </span> with <span class="blue">clear
                    relations</span>
                for the data of each workout. Challenge was to
                make <span class="red">request number</span> as low as possible for each workout creation. Now if I had to
                start again I know,
                that
                <span class="green">No-SQL</span> database would fit better in this project.
            </p>
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
    overflow: hidden;
}

.logo {
    width: 60px;
    /* opacity: 0; */
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

.green {
    color: #22c55e;
}

.red {
    color: #e11d48;
}

.yellow {
    color: #fcd34d;
}

.blue {
    color: #67e8f9;
}

@media screen and (min-width: 767px) and (max-width: 1024px) {
    .info {
        border: 1px solid white;
        border-top: 2px solid white;
        border-bottom: 2px solid white;
        width: 95vw;
        height: auto;
        z-index: 2;
        background-color: #1b1b1b;
        display: flex;
        flex-direction: column;
        padding-bottom: 100px;
    }

    .left {
        width: 100%;
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
        width: 87%;
        height: 60%;
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
        align-items: center;
        margin-top: 60px;
    }

    .tech {
        margin: 0px;
    }

    .logo {
        width: 40px;
    }

    .logos {
        margin: 10px;
    }

    .right {
        width: 100%;
        padding: 0;
    }

    .text {
        color: white;
        font-size: 25px;
        margin: 0px;
        text-align: center;
        margin-left: 10px;
        margin-right: 10px;

    }

    .heading {
        color: #0891b2;
        font-size: 25px;
        margin-bottom: 10px;
        text-align: center;
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
}

/* For resolution 390 x 844 */
@media screen and (min-width: 390px) and (max-width: 844px) {
    .info {
        border: 1px solid white;
        border-top: 2px solid white;
        border-bottom: 2px solid white;
        width: 95vw;
        height: auto;
        z-index: 2;
        background-color: #1b1b1b;
        display: flex;
        flex-direction: column;
        padding-bottom: 100px;
    }

    .left {
        width: 100%;
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
        width: 87%;
        height: 40%;
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
        align-items: center;
        margin-top: 60px;
    }

    .tech {
        margin: 0px;
    }

    .logo {
        width: 40px;
    }

    .logos {
        margin: 10px;
    }

    .right {
        width: 100%;
        padding: 0;
    }

    .text {
        color: white;
        font-size: 25px;
        margin: 0px;
        text-align: center;
        margin-left: 10px;
        margin-right: 10px;

    }

    .heading {
        color: #0891b2;
        font-size: 25px;
        margin-bottom: 10px;
        text-align: center;
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
}
</style>