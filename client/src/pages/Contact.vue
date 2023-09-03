<script setup lang="ts">
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

const form = ref(null)
const name = ref('');
const email = ref('')
const message = ref('')

const publicKey = import.meta.env.VITE_MAILJS_PUBLIC_KEY as string;
const serviceID = import.meta.env.VITE_MAILJS_SERVICE_ID as string;
const templateID = import.meta.env.VITE_MAILJS_TEMPLATE_ID as string;

const sendMessage = () => {
    emailjs.sendForm(serviceID, templateID, form.value, publicKey)
        .then((result) => {
            console.log('SUCCESS', result.text);
        }, (error) => {
            console.log("FAILED!", error.text)
        })
}
</script>

<template>
    <main>
        <form ref="form" @submit.prevent="sendMessage">
            <section class="top">
                <section class="top-left">
                    <label>name</label>
                    <input type="text" class="text" v-model="name" name="from_name" id="from_name" />
                    <label>email</label>
                    <input type="text" class="text" v-model="email" name="email_id" id="email_id" />
                </section>
                <section class="top-right">
                    <button class="send" type="submit">send</button>
                </section>
            </section>
            <label>Message</label>
            <textarea class="area" v-model="message" name="message" id="message"></textarea>
        </form>
    </main>
    <div class="bg"></div>

    <section class="footer">
        <a href="https://github.com/erratinsilentio">
            <img src="../assets/github.svg" alt="github" class="logo" />
        </a>
        <a href="https://www.linkedin.com/in/kacperkondracki/">
            <img src="../assets/linkedin.svg" alt="linkedin" class="logo" />
        </a>
        <a href="mailto: kacper.kondracki@wp.pl">
            <img src="../assets/email.svg" alt="email" class="logo" />
        </a>
    </section>
</template>

<style scoped>
main {
    width: 100vw;
    height: 80vh;
    animation: appear 1s;
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
}

.top {
    display: flex;
    flex-direction: row;
}

.top-left {
    display: flex;
    flex-direction: column;
}

.top-right {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 50%;
}

form {
    width: 60vw;
    display: flex;
    flex-direction: column;
    z-index: 2;
}

label {
    color: #06b6d4;
    font-size: 24px;
}

.text {
    width: 400px;
    height: 30px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 10px;
}

.area {
    height: 40vh;
    border-radius: 10px;
    padding: 10px;
}

.send {
    border-radius: 10px;
    width: 90%;
    height: 75%;
    background-color: #1b1b1b;
    border: 2px solid #0891b2;
    color: #0891b2;
    font-size: 32px;
    transition-duration: 0.1s;
}

.send:hover {
    background-color: #0891b2;
    color: #1b1b1b;
    font-size: 42px;
}

.bg {
    position: absolute;
    z-index: 0;
    bottom: 0;
    width: 100vw;
    height: 250px;
    background-color: #1b1b1b;
    opacity: 0.3;
    background-size: 18px 18px;
    background-image: repeating-linear-gradient(0deg, #f472b6, #f472b6 0.9px, #1b1b1b 0.9px, #1b1b1b);
    animation: roll 1s;
}

.footer {
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 5vh;
    background-color: #155e75;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo {
    width: 22px;
    height: 22px;
    margin-right: 30px;
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
        height: 0;
    }

    to {
        height: 400px;
    }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
    .text {
        width: 300px;
        height: 30px;
        padding-left: 20px;
        padding-right: 20px;
        border-radius: 100px;
    }
}

/* For resolution 390 x 844 */
@media screen and (min-width: 390px) and (max-width: 844px) {
    main {
        width: 100vw;
        height: 80vh;
        animation: appear 1s;
        position: relative;
        z-index: 2;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .top {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .top-left {
        display: flex;
        flex-direction: column;
    }

    .top-right {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        width: 50%;
    }

    form {
        width: 95vw;
        display: flex;
        flex-direction: column;
        z-index: 2;
    }

    label {
        color: #06b6d4;
        font-size: 24px;
    }

    .text {
        width: 200px;
        height: 30px;
        padding-left: 20px;
        padding-right: 20px;
    }

    .area {
        height: 40vh;
        border-radius: 10px;
    }

    .send {
        border-radius: 10px;
        width: 90%;
        height: 75%;
        background-color: #1b1b1b;
        border: 2px solid #0891b2;
        color: #0891b2;
        font-size: 32px;
        transition-duration: 0.1s;
    }

    .send:hover {
        background-color: #0891b2;
        color: #1b1b1b;
        font-size: 42px;
    }

    .bg {
        position: absolute;
        z-index: 0;
        bottom: 0;
        width: 100vw;
        height: 250px;
        background-color: #1b1b1b;
        opacity: 0.3;
        background-size: 18px 18px;
        background-image: repeating-linear-gradient(0deg, #f472b6, #f472b6 0.9px, #1b1b1b 0.9px, #1b1b1b);
        animation: roll 1s;
    }

    .footer {
        position: absolute;
        bottom: 0;
        width: 100vw;
        height: 5vh;
        background-color: #155e75;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .logo {
        width: 22px;
        height: 22px;
        margin-right: 30px;
    }
}
</style>
