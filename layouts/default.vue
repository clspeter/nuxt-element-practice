import { NuxtLink } from '../.nuxt/components';
<template>
    <div class="min-h-screen flex flex-col">
        <div class="bg-green-900">
            <header>
                <nav class="flex py-6 px-4 space-x-10 justify-between">
                    <NuxtLink class="text-green-400 text-underline" to="/">Hero Home</NuxtLink>
                    <div class="space-x-10">
                        <NuxtLink class="text-green-400 text-underline" to="/pomodoro">Pomodoro</NuxtLink>
                        <NuxtLink class="text-green-400 " to="/about">About</NuxtLink>
                    </div>
                </nav>
            </header>
        </div>
        <slot />
    </div>
</template>

