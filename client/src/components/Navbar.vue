<script setup lang="ts">
import { Page } from '../types/types'
import { store } from '../store/store'
</script>

<template>
<nav>
    <ul>
        <li @click="store.setPage(Page.About)" :class="{current: store.page === Page.About}">{{ Page.About }}</li>
        <li @click="store.setPage(Page.Projects)" :class="{current: store.page === Page.Projects}">{{ Page.Projects }}</li>
        <li @click="store.setPage(Page.Contact)" :class="{current: store.page === Page.Contact}">{{ Page.Contact }}</li>
    </ul>
</nav>
</template>

<style scoped>
nav{
    position: fixed;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);    
    display: flex;
    justify-content: center;
}

ul{
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

li{
    color: antiquewhite;
    width: 90px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 200px;
    cursor: pointer;

}

li:hover{
    background-color: #1b1b1b;
}

.current{
    background-color: antiquewhite;
    color: #1b1b1b;
}

.current:hover{
    background-color: white;
    transition-duration: 0.2s;
}
</style>
