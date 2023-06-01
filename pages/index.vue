<template>
    <div class="index">
        <el-container>
            <el-header>
                <h1>Element Counter</h1>
                <h2>Made with Element Plus and Nuxt3</h2>
            </el-header>
            <el-main>
                <Counter />
                <br />
                <el-switch v-model="colorMode" inline-prompt active-text="dark" inactive-text="light" size="large" />
                <br />
                <br />
                <el-config-provider :locale="zhtw">
                    <el-date-picker v-model="timeValue" type="date" placeholder="請選擇日期" />
                </el-config-provider>
                <br />
                <br />
                <el-button @click="open" type="success">去Google.com</el-button>
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
import zhtw from "element-plus/es/locale/lang/zh-tw";
import { ElMessage, ElMessageBox } from 'element-plus'

const open = () => {
    ElMessageBox.confirm(
        '這會將您重新導向至Google',
        '確定要前往Google嗎?',
        {
            confirmButtonText: '是',
            cancelButtonText: '否',
            type: 'warning',
        }
    )
        .then(() => {
            ElMessage({
                type: 'success',
                message: '前往Google',
            })
            setTimeout(() => {
                window.location.href = "https://www.google.com";
            }, 1000);
        })
        .catch(() => {
            ElMessage({
                type: 'info',
                message: '取消',
            })
        })
}

const color = useColorMode();
const colorMode = computed({
    get: () => color.value === 'dark',
    set: () => (color.preference = color.value === 'dark' ? 'light' : 'dark'),
});



const timeValue = ref("");
</script>
