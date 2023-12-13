<script setup lang="ts">
import { ref } from "vue"
import { useCounterStore } from "@/store/index"
import { message } from "ant-design-vue"
// import { useRouter } from "vue-router"
// const router = useRouter()
// 可以在组件中的任意位置访问 `store` 变量 ✨
defineProps<{ msg: string }>()

const count = ref(0)

const store = useCounterStore()

const onclick = () => {
  count.value++
  message.success(import.meta.env.VITE_APP_WEB_URL)
  if (import.meta.env.DEV) {
    // 只有在开发模式下才执行的逻辑
    console.log("This is the development environment.")
  } else {
    // 在生产模式下执行的逻辑
    console.log("This is the production environment.")
  }
  store.increment()
  // router.push({
  //   name: "hello",
  // })
}
</script>

<template>
  <div class="test_less">
    <a-button type="primary" @click="onclick">count is {{ store.count }}</a-button>
    <!-- <div class="test_less_p">你好！{{ msg }}</div> -->
    <img class="img" src="../../assets/images/s.jpg" alt="">
  </div>
</template>

<style scoped lang="less">
.read-the-docs {
  color: #888;
}
.test_less {
  padding: 20px 90px;
  .img {
    width: 100%;
    height: 100%;
  }
  h2 {
    margin-bottom: 80px;
  }
  width: 100%;
  background-color: antiquewhite;
  &_p {
    color: aqua;
    font-size: 30px;
    text-align: center;
    width: 100%;
    margin-top: 50px;
  }
}
</style>
@/store@/store/main
