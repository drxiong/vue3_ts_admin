<template>
  <div id="form">
    <el-form ref="formEl" :model="modelValue" v-bind="formProps" :rules="rules">
      <el-form-item v-for="item in formDefinition" :key="item.prop" :prop="item.prop" :label="item.label" :style="{ width: formProps.inline? (item.width?item.width:'320px') : '100%' }">
        <div v-if="item.render">
          <custom-render :renderFun="item.render()"/>
        </div>
        <div v-if="item.componentName" class="innerComponent">
          <outer-slot v-if="item.startSlot" :position="item.startSlot"/>
          <component :is="map[item.componentName.toLowerCase()]" :props="item" v-model="modelValue" class="component"></component>
          <outer-slot v-if="item.endSlot" :position="item?.endSlot"/>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import DnInput from './innerComponent/DnInput.vue'
import DnSelect from './innerComponent/DnSelect.vue'
import DnRadio from './innerComponent/DnRadio.vue'
import DnCheckBox from './innerComponent/DnCheckBox.vue'
import DnDatePicker from './innerComponent/DnDatePicker.vue'
import DnSwitch from './innerComponent/DnSwitch.vue'
import DnTimePicker from './innerComponent/DnTimePicker.vue'
import OuterSlot from './innerComponent/OuterSlot.vue'
import CustomRender from './innerComponent/CustomRender.tsx'
import { defineProps, defineEmits, reactive, ref, onMounted, getCurrentInstance } from 'vue'
const {modelValue, formDefinition} = defineProps({
  modelValue: {
    type: Object,
    default () {
      return {}
    }
  },
  formProps: {
    type: Object,
    default () {
      return {}
    }
  },
  formDefinition: {
    type: Array,
    default () {
      return []
    }
  }
})

let map = {
  input: DnInput,
  select: DnSelect,
  radio: DnRadio,
  checkbox: DnCheckBox,
  datepicker: DnDatePicker,
  switch: DnSwitch,
  timepicker: DnTimePicker
}

const rules = reactive({})

formDefinition.forEach(item=>{
  if(item?.componentName){
    item.componentName = item.componentName.toLowerCase().trim()
    if(!(item.componentName in map) && !item.render) {
      throw new Error(item.componentName+' is temporarily not supported, please check the spelling of the word, or choose to implement it with render');
      return false
    }
    if(!modelValue[item.prop]){
      modelValue[item.prop] = ('defaultValue' in item) ? (item?.defaultValue) : null 
    }
    if(item?.rule){
      rules[item.prop] = item.rule
    }
  }
})

function queryHandle () {
  emit('query')
}

</script>

<style lang="less" scoped>
:deep(.el-form-item__content),
:deep(.el-input),
:deep(.el-select){
  width: 100%
}
:deep(.el-date-editor) {
  width: 360px
}
:deep(.el-form--inline) {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  .el-date-editor{
    width: 100%
  }
}
.innerComponent{
  width: 100%;
  display: flex;
  .component {
    margin: 0 10px;
  }
}
:deep(.el-form-item__error){
  margin-left: 10px;
}
</style>