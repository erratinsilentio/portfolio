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
            <input type="textarea" class="area" />
        </form>
    </main>
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
