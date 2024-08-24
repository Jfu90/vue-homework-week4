<script setup>
import { RouterLink, useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStores'
import { storeToRefs } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'
const userStore = useUserStore()
const { emailStore } = storeToRefs(userStore)

const userSetting = ref({ password: '', passwordAgain: '', name: '' })

const router = useRouter()

const signupAction = async () => {
  // API
  const apiBase = 'https://todolist-api.hexschool.io'
  if (userSetting.value.password === userSetting.value.passwordAgain) {
    try {
      const response = await axios.post(`${apiBase}/users/sign_up`, {
        email: emailStore.value,
        password: userSetting.value.password,
        nickname: userSetting.value.name
      })

      alert('註冊完成，請登入')
      console.log(response)
      router.push('/login')
    } catch (err) {
      const { response } = err
      alert(response.data.message)
    }
  }
}
</script>

<template>
  <form class="formControls" action="index.html">
    <h2 class="formControls_txt">註冊帳號</h2>
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
    <label class="formControls_label" for="name">您的暱稱</label>
    <input
      class="formControls_input"
      type="text"
      name="name"
      id="name"
      placeholder="請輸入您的暱稱"
      v-model="userSetting.name"
    />
    <span v-if="!userSetting.name">此欄位不可留空</span>
    <label class="formControls_label" for="pwd">密碼</label>
    <input
      class="formControls_input"
      type="password"
      name="pwd"
      id="pwd"
      placeholder="請輸入密碼"
      required
      v-model="userSetting.password"
    />
    <span v-if="!userSetting.password">此欄位不可留空</span>
    <label class="formControls_label" for="pwd-again">再次輸入密碼</label>
    <input
      class="formControls_input"
      type="password"
      name="pwd"
      id="pwd-again"
      placeholder="請再次輸入密碼"
      required
      v-model="userSetting.passwordAgain"
    />
    <span v-if="userSetting.password.length && userSetting.passwordAgain !== userSetting.password"
      >密碼不符</span
    >
    <input
      class="formControls_btnSubmit"
      type="button"
      value="註冊帳號"
      @click.prevent="signupAction"
    />
    <RouterLink class="formControls_btnLink" to="/login">登入</RouterLink>
  </form>
</template>
