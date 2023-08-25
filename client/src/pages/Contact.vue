<script setup lang="ts">
</script>

<template>
    <main>
        <p>contact</p>
        <form>
            <section class="top">
                <section class="top-left">
                    <label>name</label>
                    <input type="text" class="text" />
                    <label>email</label>
                    <input type="text" class="text" />
                </section>
                <section class="top-right">
                    <button class="send">send</button>
                </section>
            </section>
            <label>Message</label>
            <input type="text" class="area" />
        </form>
    </main>
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
    z-index: 0;
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
}

label {
    color: #06b6d4;
    font-size: 24px;
}

.text {
    width: 400px;
    height: 30px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 100px;
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
</style>
