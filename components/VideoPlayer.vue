<template>
    <div
        class="bg-gradient-to-b from-[#0f4722] to-[#082B14] p-6 pt-20 max-sm:pt-0"
    >
        <div
            class="video-box w-full flex justify-center from-[#0f4722] to-[#082B14]"
        >
            <video
                ref="video"
                class="max-w-full w-[890px] h-[500px]"
                autoplay
                muted
                controls
            >
                <source src="/src/video.mp4" type="video/mp4" />
            </video>
        </div>

        <p
            class="Title text-lg text-[#f7ce66] p-2.5 text-center font-semibold from-[#0f4722] to-[#082B14]"
        >
            กฤตธยา (Grittaya) รับจัดงานบวงสรวง งานราชพิธีจำหน่ายเครื่องสังฆทาน
            รับงานบายศรี และเครื่องสักการะแบบโบราณไทย ในโอกาสต่างๆ
        </p>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
