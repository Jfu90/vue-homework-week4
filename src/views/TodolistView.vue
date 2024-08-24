<script setup>
import { useUserStore } from '@/stores/userStores'
import axios from 'axios'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const { nameStore } = storeToRefs(userStore)

const totalList = ref([
  // { id: 1, content: '把冰箱發霉的檸檬拿去丟', status: false },
  // { id: 2, content: '打電話叫媽媽匯款給我', status: false },
  // { id: 3, content: '整理電腦資料夾', status: false },
  // { id: 4, content: '繳電費水費瓦斯費', status: false },
  // { id: 5, content: '約vicky禮拜三泡溫泉', status: false },
  // { id: 6, content: '約ada禮拜四吃晚餐', status: false }
])
const newTodo = ref('')

const countTodo = computed(() => {
  return totalList.value.reduce((num, item) => (num = !item.status ? num + 1 : num), 0)
})

const router = useRouter()
const apiBase = 'https://todolist-api.hexschool.io'
const token = document.cookie.replace(
  new RegExp('(?:(?:^|.*;)\\s*todoToken\\s*\\=\\s*([^;]*).*$)|^.*$'),
  '$1'
)

// 檢查 token
const checkToken = async () => {
  if (token) {
    try {
      const response = await axios.get(`${apiBase}/users/checkout`, {
        headers: { Authorization: token }
      })
      getTodo()

      nameStore.value = response.data.nickname
    } catch (err) {
      alert('驗證失敗')
      router.push('/login')
    }
  } else {
    alert('token勒 ???')
    router.push('/login')
  }
}
checkToken()

// 登出
const signoutAction = async () => {
  try {
    await axios.post(
      `${apiBase}/users/sign_out`,
      {},
      {
        headers: {
          Authorization: token
        }
      }
    )
    router.push('/login')
  } catch (err) {
    alert(err.response.data.message)
  }
}

// 抓資料
const getTodo = async () => {
  try {
    const { data } = await axios.get(`${apiBase}/todos/`, {
      headers: {
        Authorization: token
      }
    })
    totalList.value = data.data
  } catch (err) {
    alert('取得失敗')
  }
}

// 新增
const addTodo = async () => {
  if (newTodo.value) {
    try {
      await axios.post(
        `${apiBase}/todos/`,
        {
          content: newTodo.value
        },
        {
          headers: {
            Authorization: token
          }
        }
      )
      newTodo.value = ''

      getTodo()
    } catch (err) {
      alert('新增失敗')
    }
  } else {
    alert('想一想待辦內容吧！')
  }
}

// 移除
const delTodo = async (id) => {
  try {
    await axios.delete(`${apiBase}/todos/${id}`, {
      headers: {
        Authorization: token
      }
    })

    getTodo()
  } catch (err) {
    alert('移除失敗')
  }
}

//切換狀態
const toggleTodo = async (id) => {
  try {
    await axios.patch(
      `${apiBase}/todos/${id}/toggle`,
      {},
      {
        headers: {
          Authorization: token
        }
      }
    )

    getTodo()
  } catch (err) {
    alert('切換狀態失敗')
  }
}
</script>

<template>
  <div id="todoListPage" class="bg-half">
    <nav>
      <h1><RouterLink to="/todolist">ONLINE TODO LIST</RouterLink></h1>
      <ul>
        <li class="todo_sm">
          <RouterLink to="/todolist"
            ><span>{{ nameStore }}的代辦</span></RouterLink
          >
        </li>
        <li><a href="#" @click.prevent="signoutAction">登出</a></li>
      </ul>
    </nav>
    <div class="conatiner todoListPage vhContainer">
      <div class="todoList_Content">
        <div class="inputBox">
          <input type="text" placeholder="請輸入待辦事項" v-model="newTodo" />
          <a href="#" @click.prevent="addTodo">
            <i class="fa fa-plus"></i>
          </a>
        </div>
        <div class="todoList_list">
          <ul class="todoList_tab">
            <li>
              <RouterLink
                to="/todolist/all"
                :class="$route.params.status == 'all' || !$route.params.status ? 'active' : ''"
                >全部</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/todolist/todo"
                :class="$route.params.status == 'todo' ? 'active' : ''"
                >待完成</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/todolist/done"
                :class="$route.params.status == 'done' ? 'active' : ''"
                >已完成</RouterLink
              >
            </li>
          </ul>
          <div class="todoList_items">
            <ul class="todoList_item">
              <template v-for="list in totalList" :key="list.id">
                <li
                  v-if="
                    ['todo', 'done'].includes($route.params.status)
                      ? ($route.params.status == 'todo' && !list.status) ||
                        ($route.params.status == 'done' && list.status)
                      : true
                  "
                >
                  <label class="todoList_label">
                    <input
                      class="todoList_input"
                      type="checkbox"
                      v-model="list.status"
                      @click="toggleTodo(list.id)"
                    />
                    <span>{{ list.content }}</span>
                  </label>
                  <a href="#" @click.prevent="delTodo(list.id)">
                    <i class="fa fa-times"></i>
                  </a>
                </li>
              </template>
            </ul>
            <div class="todoList_statistics">
              <p v-if="$route.params.status != 'done'">
                {{ countTodo ? `${countTodo} 個待完成項目` : '目前尚無待辦事項' }}
              </p>
              <p v-if="$route.params.status == 'done'">
                {{ totalList.length - countTodo }} 個已完成項目
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
