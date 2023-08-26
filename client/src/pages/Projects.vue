<script setup lang="ts">
</script>

<template>
    <main class="main-one">
        <section class="tabs">
            <button class="tab-btn">Soul Journal</button>
            <button class="tab-btn">Routine Tracker</button>
        </section>
        <section class="info">

        </section>
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
}

.tab-btn {
    margin-right: 20px;
    height: 50px;
    width: 200px;
    font-size: 24px;
}

.info {
    outline: 1px solid white;
    width: 80vw;
    height: 70vh;
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
