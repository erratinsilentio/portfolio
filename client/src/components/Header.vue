<script lang="ts">

</script>

<template>
    <header>
        <p class="text">erratinsilent.io</p>
    </header>
</template>

<style scoped>
header {
    width: 100vw;
    height: 12vh;
    animation: appear 1s;
    background-color: #0e7490;
    display: flex;
    align-items: center;
    position: relative;
}

p {
    margin: 0;
    padding-right: 10px;
}

.text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-right: 4px solid black;
    font-size: 36px;
    white-space: nowrap;
    overflow: hidden;
    animation: typewriter 1.5s steps(15),
        blinkCursor 1s steps(15) infinite;
}

@keyframes typewriter {
    from {
        width: 0px;
    }

    to {
        width: 150px;
    }
}

@keyframes blinkCursor {
    from {
        border-right-color: black;
    }

    to {
        border-right-color: transparent;
    }
}

@keyframes appear {
    from {
        height: 0;
        opacity: 0;
    }

    to {
        height: 12vh;
        opacity: 1;
    }
}
</style>