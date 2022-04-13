import { defineProps } from 'vue'
export function getProps(){
  return {
    props: {
      type: Object,
      default: {}
    },
    modelValue: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}