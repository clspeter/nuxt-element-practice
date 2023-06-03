import { NuxtLink } from '../.nuxt/components';
<template>
    <div class="min-h-screen flex flex-col">
        <div class="bg-primary">
            <header>
                <nav class="flex py-6 px-4 space-x-10 justify-between text-neutral">
                    <NuxtLink class=" text-underline" to="/">Hero Home</NuxtLink>
                    <div class="space-x-10">
                        <NuxtLink class="text-underline" to="/pomodoro">Pomodoro</NuxtLink>
                        <NuxtLink class="" to="/about">About</NuxtLink>
                    </div>
                </nav>
            </header>
        </div>
        <slot />
        <div class="bg-primary">
            <footer class="flex py-6 px-4 space-x-10 justify-end text-neutral">
                <NuxtLink class="text-underline" to="https://github.com/clspeter/nuxt-element-practice">
                    Made by clspeter
                </NuxtLink>
            </footer>

        </div>
    </div>
</template>

