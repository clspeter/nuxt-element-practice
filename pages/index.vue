<template>
    <div class="grow w-full bg-gray-800 flex">
        <div class="m-auto">
            <VueWriter class="text-2xl md:text-5xl text-green-600 font-semibold"
                :array="['<This_is_Peter />', 'WhoSartedToLearnVue.js']" :caret="cursor" />
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
.is-typed span.cursor {
    display: inline-block;
    width: 3px;
    background-color: white;
    animation: blink 1s infinite;
}
</style>