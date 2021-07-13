<template>
  <v-app>
    <v-main>
      <span class='bg'></span>
      <Nuxt>
      </Nuxt>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'LoginSignUp',
  data() {
    return {
    }
  }
}
</script>

<style scoped>.bg {
  width: 100vw;
  height: 97vh;
  position: absolute;
  top: 0;
  left: 0;
  background: url('static/background.jpg') no-repeat center center;
  background-size: cover;
  transform: scale(1.1);
}
</style>
