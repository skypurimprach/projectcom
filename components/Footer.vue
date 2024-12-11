<template>
    <div></div>
    <div class="bg-black text-white w-full px-4 md:px-20">
        <div
            class="flex flex-col md:flex-row justify-center items-center md:justify-between md:items-start lg:h-[120px]"
        >
            <div class="h-full flex flex-col gap-6 justify-center">
                <div class="h-1/2 mt-8">
                    <nav
                        class="max-md:mt-0 gap-10 flex flex-col items-center md:flex-row mt-5 md:mt-0 max-md:gap-2"
                    >
                        <nuxt-link
                            class="nav-link text-white p-2 rounded-md transition-colors no-underline hover:text-[#eddf82] text-center"
                            exact-active-class="active-link"
                            to="/"
                            >home</nuxt-link
                        >

                        <nuxt-link
                            class="nav-link text-white p-2 rounded-md transition-colors no-underline hover:text-[#eddf82] text-center"
                            exact-active-class="active-link"
                            to="/aboutus"
                            >aboutus</nuxt-link
                        >
                    </nav>
                </div>
               
                </div>
            </div>
        </div>
        <hr class="my-2 border-1 border-white" />
        <div class="text-xs text-center md:text-left md:ml-6">
            © project college of computing
        </div>
    <div></div>
</template>

<script setup lang="ts">
import type { NuxtLink } from '#build/components'
</script>

<style>
.items {
    margin-left: 20px;
}
</style>
