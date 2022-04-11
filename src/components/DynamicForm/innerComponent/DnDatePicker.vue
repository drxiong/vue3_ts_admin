<template>
  <div>
    <el-date-picker 
      v-model="modelValue[props.prop]"
      v-bind="props.innerProps"
    />
  </div>
</template>
<script lang="ts" setup>
import { getProps } from '@/hooks/component/getProps'
const { props, modelValue } = defineProps(
  getProps()
)
</script>