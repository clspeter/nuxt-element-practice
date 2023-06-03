import { NuxtLink } from '../.nuxt/components';
<template>
    <div class="min-h-screen flex flex-col">
        <div class="bg-rose-200 shadow-md">
            <header>
                <nav class="flex py-4 px-6 space-x-10 justify-between text-accent">
                    <NuxtLink class="text-underline font-bold" to="/">Hero Home</NuxtLink>
                    <div class="space-x-6 font-bold">
                        <NuxtLink class="text-underline" to="/pomodoro">Pomodoro</NuxtLink>
                        <NuxtLink class="" to="/about">About</NuxtLink>
                    </div>
                </nav>
            </header>
        </div>
        <slot />
        <div class="bg-rose-200 shadow-">
            <footer class="flex py-2 px-4 justify-end text-accent">
                <NuxtLink class="text-underline" to="https://github.com/clspeter/nuxt-element-practice">
                    Made by clspeter
                </NuxtLink>
            </footer>

        </div>
    </div>
</template>

