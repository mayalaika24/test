<template>
    <div class="dialog-layout">
            <div class="dialog-content">
                <div class="dialog-header d-flex align-items-center mb-3">
                <h1 class="flex-grow-1 text-center dialog-title">Add</h1>
                <button class="close-btn" @click="$emit('close')">
                    <img src="../../assets/icons/close.svg" />
                </button>
            </div>
            <slot></slot>
        </div>
    </div>
</template>
<script setup>
</script>
<style scoped>
.dialog-layout {
    height: 100vh;
    width: 100%;
    background-color: rgba(0,0,0,0.05);
    backdrop-filter: blur(5px);
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
}
.dialog-content {
    background-color: #FFF;
    padding: 1rem;
    border-radius: 10px;
}
.close-btn {
    border: 1px solid #615E5E;
    height: 28px;
    width: 28px;
    border-radius: 50%;
    background-color: transparent;
}
</style>