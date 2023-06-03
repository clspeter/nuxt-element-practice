<template>
    <div class="grow w-full flex">
        <div class="m-auto">
            <VueWriter class="text-2xl md:text-5xl text-accent font-semibold"
                :array="['<Hi, This_is_Peter />', 'WhoStartedToLearn.vue']" :caret="cursor" />
        </div>
    </div>
</template>

<script>
import VueWriter from 'vue-writer'
export default {
    components: { VueWriter }
}
</script>
<style>
@keyframes blink {
    0% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.is-typed span.cursor {
    display: inline-block;
    width: 3px;
    background-color: black;
    animation: blink 1s infinite;
}
</style>