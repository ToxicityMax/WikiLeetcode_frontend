<template>
  <div>
    <AppBar dark @toggleDrawer='toggleDrawer'></AppBar>
    <v-app>
      <v-main>
        <v-alert v-if='$auth.loggedIn' dismissible type='success' rounded>Logged in</v-alert>
        <v-alert v-else type='success' dismissible rounded> Not Logged in! You should not be in this page
          <v-btn text rounded to='/login' outlined color='black'> Login</v-btn>
          <v-btn text rounded to='/signup' outlined color='black'> Signup</v-btn>
        </v-alert>
        <v-row>
          <v-col v-show='drawer' xs='12' sm='3' md='2'>
            <NavDrawer class='ma-2 text-truncate' :drawer='drawer'></NavDrawer>
          </v-col>
          <v-divider vertical></v-divider>
          <v-col :xs='content.xs' :sm='content.sm' :md='content.md'>
            <Nuxt></Nuxt>
          </v-col>
        </v-row>
      </v-main>

    </v-app>
  </div>
</template>

<script>
import NavDrawer from '../components/partials/NavDrawer'
import AppBar from '../components/partials/appBar'

export default {
  name: 'Default',
  components: { AppBar, NavDrawer },
  data() {
    return {
      drawer: true,
      content: {
        xs: 12,
        sm: 9,
        md: 10
      }
    }
  },
  methods: {
    toggleDrawer() {
      if (this.drawer === true) {
        this.content.xs = 12
        this.content.md = 12
        this.content.sm = 12
        this.drawer = false
      } else {
        this.content.md = 10
        this.content.sm = 9
        this.content.xs = 12
        this.drawer = true
      }

    }
  }
}
</script>

<style>


</style>
