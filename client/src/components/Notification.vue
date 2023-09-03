<script setup lang="ts">
import { store } from '../store/store';
import { NotificationMessage } from '../types/types'
</script>

<template>
    <article class="container"
        :class="{ success: store.notificationStatus == NotificationMessage.SUCCESS, error: store.notificationStatus == NotificationMessage.ERROR }">
        <span>{{ store.notificationStatus }}</span>
        <div
            :class="{ success_animation: store.notificationStatus == NotificationMessage.SUCCESS, error_animation: store.notificationStatus == NotificationMessage.ERROR }">
        </div>
    </article>
</template>

<style scoped>
.container {
    width: 150px;
    height: 75px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    top: 50px;
    right: 50px;
    z-index: 5;
    border-radius: 10px;
}

.success {
    background-color: #059669;
}

.error {
    background-color: #b91c1c;
}

span {
    z-index: 7;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.success_animation {
    width: 100%;
    border-radius: 10px;
    height: 100%;
    z-index: 6;
    background-color: #4ade80;
    animation: wide 4s;
}

.error_animation {
    width: 100%;
    border-radius: 10px;
    height: 100%;
    z-index: 6;
    background-color: #ef4444;
    animation: wide 4s;
}

@keyframes wide {
    from {
        width: 0%;
    }

    to {
        width: 100%;
    }
}
</style>