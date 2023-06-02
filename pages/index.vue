<template>
    <div class="grow w-full bg-gray-800 flex">
        <div class="m-auto">
            <VueWriter class=" text-3xl text-green-600 font-semibold"
                :array="['<This_is_Peter/>', 'WhoSartedToLearnVue.js']" />
        </div>
    </div>
</template>

<script>
import VueWriter from 'vue-writer'
export default {
    components: { VueWriter }
}
</script>