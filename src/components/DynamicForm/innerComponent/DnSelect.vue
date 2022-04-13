<template>
  <el-select v-model="modelValue[props.prop]">
    <el-option 
      v-for="item in props.options" 
      :key="item.value" 
      :label="item.label" 
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>
<script lang="ts" setup>
import { getProps } from '@/hooks/component/getProps'
const { props, modelValue } = defineProps(
  getProps()
)
</script>