<template>
  <div id="app">
    <button @click="message='test de watch'">Button</button>
    <br><br>
    <label style="background-color: black; color:white">{{ printMessage }}</label>
    <br><br>
    <label style="background-color: red; color:white">{{ message }}</label>
    <br><br>
    <label style="background-color: blue; color:white">{{ watchProp }}</label>
    <br><br>
    <label style="background-color: pink; color:white">{{ computedWatchProp }}</label>
    <br><br>
    <button @click="secuence='computed property / with getter and setter'">Button</button>
    <br><br>
    <label style="background-color: gray; color:white">{{ secuence }}</label>
    <br><br>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <br>
    <br>
    <br>
    <input v-model.lazy="message">
  </div>
</template>

<script>
//using ES2015 modules, through Babel and Webpack
import HelloWorld from './components/HelloWorld.vue'

export default {
  data:       function () {
    return {
      one:       "One",
      two:       "Two",
      message:   "testtttt",
      watchProp: ""
    };
  },
  computed:   {
    // a computed getter
    printMessage:      function () {
      // `this` points to the vm instance
      return "hello vue".split('').reverse().join('')
    },
    computedWatchProp: function () {
      return this.message + " from button but with a computed prop"
    },
    secuence:          {
      get: function () {
        return this.one + "-" + this.two;
      },
      set: function (val) {
        let names = val.split('/')
        this.one = names[0]
        this.two = names[1]
      }
    }
  },
  watch:      {
    message: function () {
      this.watchProp = this.message + " from button"
    },
  },
  name:       'App',
  components: {
    HelloWorld
  }
}
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
