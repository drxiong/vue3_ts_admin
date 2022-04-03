<template>
  <div class="login">
    <h1>登陆</h1>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    
  },
})
</script>

<style lang="less" scoped>
.login {
  width: 600px;
  height: 400px;
  border: 1px solid #CCC;
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  margin-left: -300px;
  margin-top: -300px;
}
</style>
