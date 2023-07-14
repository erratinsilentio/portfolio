<script setup lang="ts">
</script>

<template>
<nav>
    <ul>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
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
    background-color: antiquewhite;
    color: #1b1b1b;
    width: 90px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 200px;

}

li:hover{
    background-color: #1b1b1b;
}
</style>
