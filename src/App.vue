<template>
  <div class = "full-width center-content">
    <hello-component name="Bitch" />
    <MessageList :messages="messages"/>
  </div>
</template>

<script>
  import HelloComponent from'./components/HelloComponent.vue'
  import MessageList from './components/MessageList'

  export default{
    name: 'App',
    data: () => ({ messages: ['Hey John', 'Howdy Paco'] }),    
    components: {
      HelloComponent
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>