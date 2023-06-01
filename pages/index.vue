<template>
    <div class="index">
        <el-container>
            <el-header>
                <h1>Element Counter</h1>
            </el-header>
            <el-main>
                <Counter />
                <el-switch v-model="colorMode" inline-prompt active-text="dark" inactive-text="light" size="large" />
            </el-main>
        </el-container>
    </div>
</template>

  
<style>
.index {
    padding-top: 60px;
    text-align: center;
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>
<script setup lang="ts">
const color = useColorMode();
const colorMode = computed({
    get: () => color.value === 'dark',
    set: () => (color.preference = color.value === 'dark' ? 'light' : 'dark'),
});
</script>
