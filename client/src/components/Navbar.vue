<script setup lang="ts">
import { Page } from '../types/types'
import { store } from '../store/store'
</script>

<template>
    <nav>
        <ul>
            <li @click="store.setPage(Page.About)" :class="{ 'not': store.page !== Page.About }">{{ Page.About }}</li>
            <li @click="store.setPage(Page.Projects)" :class="{ 'not': store.page !== Page.Projects }">{{ Page.Projects }}
            </li>
            <li @click="store.setPage(Page.Contact)" :class="{ 'not': store.page !== Page.Contact }">{{ Page.Contact }}</li>
            <li class="box"
                :class="{ 'left': store.page === Page.About, 'center': store.page === Page.Projects, 'right': store.page === Page.Contact }">
            </li>
        </ul>
    </nav>
</template>

<style scoped>
nav {
    position: fixed;
    z-index: 3;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
}

ul {
    width: 300px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    background-color: #09090b;
    color: white;
    border-radius: 100px;
    padding: 0;
}

.box {
    position: absolute;
    z-index: 0;
    top: 50%;
    transform: translate(0%, -50%);
    background-color: #0e7490;
    transition: all 1s ease;
}

.left {
    left: 2%;
}

.center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.right {
    right: 2%;
}

li {
    z-index: 1;
    color: white;
    mix-blend-mode: difference;
    width: 90px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 200px;
    cursor: pointer;

}

.not:hover {
    background-color: #1b1b1b;
}



@media screen and (min-width: 390px) and (max-width: 844px) {
    nav {
        position: fixed;
        z-index: 3;
        top: 88%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
    }
}
</style>
