<template>
    <div class="flex flex-wrap justify-center gap-10">
        <div
            v-for="(item, index) in content.filter((e) => e.active == true)"
            :key="index"
        >
            <div
                class="card-body border-gray-200 shadow rounded-xl w-[330px] h-[447px]"
            >
                <div>
                    <img :src="item.image" class="image w-[280px] h-[192px]" />
                </div>
                <div class="flex gap-2">
                    <img
                        class="icon w-[18.67px] h-[18.67px]"
                        src="/images/icons/calendar.png"
                    />
                    <h1 class="date text-gray-400 text-sm">
                        {{ item.date }}
                    </h1>
                </div>

                <h2 class="title text-black font-semibold">
                    {{ item.title }}
                </h2>
                <p class="content text-gray-400 font-medium">
                    {{ item.content }}
                </p>
                <div class="card-actions justify-center">
                    <NuxtLink :to="`/details/contents/${item.id}`">
                        <button
                            class="btn text-white text-sm bg-black btn-xs w-[180px] h-[35px] rounded-full"
                        >
                            อ่านบทความ
                        </button>
                    </NuxtLink>
                </div>
            </div>
        </div>
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
    </div>
</template>

<script setup lang="ts">
import { getDataContent } from '~/data/DataContent.js'
const { content } = getDataContent()
const data = {
    content,
}
</script>

<style scoped>
line {
    stroke: #000000;
    stroke-width: 2;
}
</style>
