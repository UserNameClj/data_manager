<template>
  <div id="app">
    <PageHeader/>
    <Conten/>
    <Foot/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import PageHeader from './components/PageHeader'
import Conten from './components/Conten'
import Foot from './components/Foot'

export default {
  name: 'App',
  components: {
    HelloWorld,
    PageHeader,
    Conten,
    Foot
  }
}
</script>

<style>
*{
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
a{
  text-decoration: none
}
li{
  list-style: none;
}
.float-left{
  float: left;
}
.float-right{
  float:right;
}
.float-clear{
  clear: both;
}

</style>
