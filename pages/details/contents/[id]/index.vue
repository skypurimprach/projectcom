<template>
    <CardDetailContent />
    <p class="Content text-center text-black text-3xl font-bold">
        บทความเพิ่มเติม
    </p>
    <div class="flex justify-center items-center w-full h-[50px]">
        <svg
            class="w-[70%] h-auto"
            height="50"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
        >
            <line x1="0" y1="10" x2="100%" y2="10" />
        </svg>
    </div>
    <SubContent />
</template>

<script setup lang="ts"></script>

<style scoped>
line {
    stroke: #000000;
    stroke-width: 2;
}
</style>
