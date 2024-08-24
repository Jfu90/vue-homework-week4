<script setup>
import { ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/userStores'
import axios from 'axios'
const userStore = useUserStore()
const { emailStore, nameStore } = storeToRefs(userStore)

const loginPassword = ref('')

// 清除token
document.cookie = `todoToken=;expires=Thu, 01 Jan 1970 00:00:00 GMT`

// 登入
const router = useRouter()
const loginAction = async () => {
  const apiBase = 'https://todolist-api.hexschool.io'

  try {
    const response = await axios.post(`${apiBase}/users/sign_in`, {
      email: emailStore.value,
      password: loginPassword.value
    })
    // console.log(response)
    nameStore.value = response.data.nickname

    // cookie存token
    document.cookie = `todoToken=${response.data.token};expires=${new Date(response.data.exp * 1000).toUTCString()}`
    emailStore.value = ''
    router.push('/todolist')
  } catch (err) {
    alert(err.response.data.message)
  }
}
</script>

<template>
  <form class="formControls" action="index.html">
    <h2 class="formControls_txt">最實用的線上代辦事項服務</h2>
    <label class="formControls_label" for="email">Email</label>
    <input
      class="formControls_input"
      type="text"
      id="email"
      name="email"
      placeholder="請輸入 email"
      required
      v-model="emailStore"
    />
    <span v-if="!emailStore">此欄位不可留空</span>
    <label class="formControls_label" for="pwd">密碼</label>
    <input
      class="formControls_input"
      type="password"
      name="pwd"
      id="pwd"
      placeholder="請輸入密碼"
      required
      v-model="loginPassword"
    />
    <span v-if="loginPassword.length && loginPassword.length < 6">密碼長度不足6</span>
    <input class="formControls_btnSubmit" type="button" value="登入" @click.prevent="loginAction" />
    <RouterLink class="formControls_btnLink" to="/signup">註冊帳號</RouterLink>
  </form>
</template>
