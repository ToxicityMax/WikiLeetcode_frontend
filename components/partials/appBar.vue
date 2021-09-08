<template>
  <v-app-bar :dark='dark' hide-on-scroll app flat dense clipped-left>
    <v-app-bar-nav-icon @click='toggleDrawer'></v-app-bar-nav-icon>
    <v-toolbar-title>Leetcode Wiki</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-text-field hide-details
                  placeholder='Search'
                  filled
                  rounded
                  dense
                  append-icon='mdi-magnify' style='max-width: 350px'></v-text-field>
    <v-spacer></v-spacer>
    <v-menu dark offset-y>
      <template #activator='{ on, attrs }'>
        <v-btn
          fab small
          depressedc
          v-bind='attrs'
          v-on='on'>
          <img alt='userAvatar' src='https://img.icons8.com/color/48/000000/user-male-circle--v1.png' />
        </v-btn>
      </template>
      <v-list-item-group>
        <v-list class='pa-2'>
          <v-list-item color='white'>
            <v-list-item-content style='color: lightgrey'> Settings</v-list-item-content>
            <v-list-item-icon class='pl-3'>
              <v-icon color='main'>mdi-cog</v-icon>
            </v-list-item-icon>
          </v-list-item>
          <v-list-item color='white' @click='logout'>
            <v-list-item-content style='
            color: lightgrey'>Logout</v-list-item-content>
            <v-list-item-icon class='pl-3'>
              <v-icon color='main'> mdi-logout</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-list-item-group>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppBar',
  props: {
    dark: Boolean,
    drawer: Boolean
  },
  methods:{
    toggleDrawer(){
      this.$emit('toggleDrawer')
    },
    async logout(){
      console.log('logging out')
      await this.$auth.logout()
    }
  }
}
</script>

<style scoped>

</style>
