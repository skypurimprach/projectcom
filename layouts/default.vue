<template>
    <div class="min-h-screen">
        <div class="sticky top-0 z-10">
            <div class="relative">
                <Navbar />
            </div>
            <div class="absolute w-full top-0">
                <Sidebar />
            </div>
        </div>
        <div class="">
            <slot></slot>
        </div>
        <Footer />
    </div>

    <!-- <Sidebar></Sidebar> -->
    <!-- <div>
        <slot></slot>
    </div>
    <Footer /> -->
    <!-- <div>
        <Navbar></Navbar>
        <slot> </slot>
        <Footer></Footer>
    </div> -->
</template>

<script setup lang="ts"></script>

<style scoped></style>
