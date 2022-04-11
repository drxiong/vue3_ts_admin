<template>
  <div>
    <el-radio-group v-model="modelValue[props.prop]" >
      <el-radio 
        v-for="item in props.options" 
        :key="item.value"
        :label="item.value"
      >
        {{item.label}}
      </el-radio>
    </el-radio-group>
    
  </div>
</template>
<script lang="ts" setup>
import { getProps } from '@/hooks/component/getProps'
const { props, modelValue } = defineProps(
  getProps()
)
</script>