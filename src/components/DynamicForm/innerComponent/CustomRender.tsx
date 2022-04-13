import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    renderFun: {
      type: Object
    }
  },
  render(h :any, ctx:any){
    return this.renderFun
  }
})