<template>
  <span v-if="isShow">
    <span v-if="typeof position === 'string'">{{position}}</span>
    <span v-if="typeof position === 'function'">
      <!-- <span v-html="position()"></span> -->
      <custom-render :renderFun="position()"/>
    </span>
  </span>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import CustomRender from './CustomRender'
const { position } = defineProps({
  position: {
    type: [String,Function],
    default: 'startSlot'
  }
})
const isShow = computed(()=>{
  return position && position!=='' && ['string', 'function'].includes(typeof position)
})
</script>