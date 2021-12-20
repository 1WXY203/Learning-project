<template>
  <div>
      <mynav />
      <router-view />
  </div>
</template>

<script>
import mynav from '../components/mynav'
export default {
    components:{
        mynav
    }
}
</script>

<style>

</style>