<template>
    <div class="p-4 md:p-10" v-if="item">
        <div class="text-gray-400">
            <div class="flex flex-wrap gap-2 md:gap-4 mb-2">
                <NuxtLink to="/">
                    <div class="hover:text-black font-medium">หน้าหลัก</div>
                </NuxtLink>
                >
                <div class="text-black font-semibold">รายละเอียดบทความ</div>
            </div>
            <div class="flex gap-2 mt-5">
                <img
                    class="icon w-[18.67px] h-[18.67px]"
                    src="/images/icons/calendar.png"
                />
                <h1 class="date text-black text-sm">{{ item.date }}</h1>
            </div>
        </div>
        <div class="flex flex-wrap justify-center gap-10">
            <div
                class="card-body border-gray-200 shadow rounded-xl w-full h-full justify-center items-center"
            >
                <h1 class="title text-center text-black font-bold text-3xl">
                    {{ item.title }}
                </h1>
                <img
                    :src="item.image"
                    class="image md:h-[480px] w-[720px] rounded-lg"
                />
                <div class="content">
                    <p class="content text-black font-medium mt-5 indent-10">
                        {{ item.detail }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getDataContent } from '~/data/DataContent.js'
const { content } = getDataContent()

const route = useRoute()
const itemId = route.params.id

const item = ref<any>()

onMounted(() => {
    // ใช้ itemId เพื่อค้นหาข้อมูลสินค้าที่ตรงกับ ID ที่กำหนด
    item.value = content.find((item) => item.id === itemId)
})
</script>

<style scoped></style>
