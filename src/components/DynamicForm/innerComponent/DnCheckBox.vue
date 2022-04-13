<template>
  <div>
    <el-checkbox-group v-model="modelValue[props.prop]" >
      <el-checkbox 
        v-for="item in props.options" 
        :name="props.prop"
        :key="item.value"
        :label="item.value"
      >
        {{item.label}}
      </el-checkbox>
    </el-checkbox-group>
    
  </div>
</template>
<script lang="ts" setup>
import { getProps } from '@/hooks/component/getProps'
const { props, modelValue } = defineProps(
  getProps()
)
</script>