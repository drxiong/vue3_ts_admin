<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <p>count: {{ count }}</p>
    <button @click="clickHandle">count++</button>
 -->
   <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent, computed, Ref } from 'vue';
import { useStore } from 'vuex'
import { login } from '../src/api/common/login'
export default defineComponent({
  async setup(props) {
    const store = useStore()
    console.log(store)
    const count = computed(() => store.state.count);
    const clickHandle = ()=>{
      store.commit('increment')
    }
    const data = await login({
      username: 'xiong',
      password: '123'
    })
    if(data){
      console.log(data)
    }
    return {
      count,
      clickHandle
    }
  }
})



</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
