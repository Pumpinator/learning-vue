<template>
  <h1>{{ title }}</h1>
  <div>
    <input type="text" ref="name">
    <button @click="handleClick">Click me</button>
  </div>
  <teleport to="#modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <h1>{{ title }}</h1>
      <p>{{ content }}</p>
      <template v-slot:links>
        <a href="#">Link</a>
        <a href="#">Another link</a>
      </template>
    </Modal>
  </teleport>
  <teleport to="#modals" v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <h1>{{ title }}</h1>
      <p>{{ content }} two</p>
      <template v-slot:links>
        <a href="#">Link</a>
        <a href="#">Another link</a>
      </template>
    </Modal>
  </teleport>
  <p>Welcome...</p>
  <button @click.alt="toggleModal" @click.shift="toggleModalTwo">Open modal (alt or shift click)</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return { title: "My second Vue app ever", content: "Modal content", showModal: false, showModalTwo: false };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add('active');
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    }
  }
}
</script>

<style>
#app, #modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #DDD;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
