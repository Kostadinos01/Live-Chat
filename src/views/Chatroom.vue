<template>
  <div class="container">
    <NavBar />
    <ChatWindow />
    <NewChatForm />
  </div>
</template>

<script>
import NewChatForm from "../components/NewChatForm.vue";
import ChatWindow from "../components/ChatWindow.vue";
import NavBar from "../components/NavBar.vue";
//import getUser from '../composables/getUser'
//import { watch } from 'vue'
//import { useRouter } from 'vue-router'

export default {
  components: { NavBar, NewChatForm, ChatWindow },
  //setup() {
  //const router = useRouter()
  //const { user } = getUser()
  // If the user value is ever null, redirect to welcome screen
  //watch(user, () => {
  //if (!user.value) {
  //router.push({ name: 'Welcome' })
  //}
  //})
  //}
};
</script>

<style>
</style>