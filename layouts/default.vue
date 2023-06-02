import { NuxtLink } from '../.nuxt/components';
<template>
    <div class="bg-gray-600">
        <header>
            <nav class="flex py-6 px-4 space-x-10">
                <NuxtLink class="text-green-500 text-underline" to="/">Nuxt Home</NuxtLink>
                <NuxtLink class="text-green-500 text-underline" to="/pomodoro">Pomodoro</NuxtLink>
                <NuxtLink class="text-green-500 " to="/about">About</NuxtLink>
            </nav>
        </header>
    </div>
    <div>
        <slot />
    </div>
</template>

