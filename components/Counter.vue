<script setup lang="ts">
const { count, setCount } = useCount()
</script>

<template>
  <div class="counter">
    <el-input-number :modelValue="count" :min="1" :max="10" class="input" @onUpdate:modelValue="setCount" />
    <el-dropdown @command="setCount">
      <el-button type="primary">
        Select Count
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="item in 10" :key="item" :command="item">{{ item }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<style>
.counter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.input {
  margin-bottom: 20px;
}
</style>