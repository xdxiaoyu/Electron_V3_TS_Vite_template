<script setup lang="ts">
import { ref } from "vue"

defineProps<{ msg: string }>()

const count = ref(0)

const onclick = () => {
  alert("你好！")
  if (import.meta.env.DEV) {
    // 只有在开发模式下才执行的逻辑
    console.log("This is the development environment.")
  } else {
    // 在生产模式下执行的逻辑
    console.log("This is the production environment.")
  }
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>

  <div class="test_less">
    <button type="button" @click="onclick">count is {{ count }}</button>
    <p class="test_less_p">你好！</p>
  </div>
</template>

<style scoped lang="less">
.read-the-docs {
  color: #888;
}
.test_less {
  width: 100%;
  height: 120px;
  background-color: antiquewhite;
  display: flex;
  &_p {
    color: aqua;
    font-size: 30px;
    text-align: center;
    width: 100%;
  }
}
</style>
