<template>
  <el-input 
    v-bind="props.innerProps" 
    v-model="modelValue[props.prop]"
  />
</template>
<script lang="ts" setup>
import { getProps } from '@/hooks/component/getProps'
const { props, modelValue } = defineProps(
  getProps()
)
</script>