<template>
  <v-container>
    <v-row align='center' dense justify='center' style='height:100vh'>
      <v-col class='justify-center align-center'>
        <v-card class='rounded-xl' elevation='12' min-height='50vh' rounded>
          <v-row>
            <v-col class='teal accent-1 rounded-l-xl' cols='12' md='6' style='min-height: 50vh'>
              <v-container fluid>
                <div class='display-1 font-weight-medium text-md-center '>
                  Your Personal wiki for Leetcode
                </div>
                <div class='headline font-weight-light text-justify pt-3 font-italic'>
                  Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce
                  convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut,
                  mollis sed,  nonummy id, metus. Nulla consequat massa quis enim.
                </div>
              </v-container>
            </v-col>
            <v-col col='12' md='6'>
              <v-card-title class='text-right font-weight-medium text-h4'>Login</v-card-title>
              <v-form ref='login' lazy-validation>
                <v-card-text>
                  <v-text-field v-model='user.username' :rules='[required]'
                                dense
                                filled placeholder='Username'
                                solo></v-text-field>
                  <v-text-field v-model='user.password'
                                :append-icon="passShow ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules='[required]'
                                :type="passShow ? 'text':'password'"
                                counter dense
                                hint='At least 8 characters' placeholder='Password' solo
                                @click:append='passShow=!passShow'></v-text-field>
                </v-card-text>
                <v-card-actions>
                  <v-row align='center' justify='space-around'>
                    <v-btn
                      class='mr-4 rounded-lg' color=' green accent-4 ' elevation='2'
                      min-width='100' outlined ripple
                      text
                      @click='validate'>
                      Login
                    </v-btn>
                    <v-btn
                      color=' green accent-4 '
                      outlined
                      ripple text to='/signup'>
                      Sign Up
                    </v-btn>
                  </v-row>
                </v-card-actions>
              </v-form>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
export default {
  name: 'Login',
  components: {},
  layout: 'LoginSignUp',
  data() {
    return {
      passShow: false,
      user: {
        password: null,
        username: null
      },
      required: value => !!value || 'Required.',
      min: v => (v && v.length >= 8) || 'Minimum 8 characters'
    }
  },
  computed: {},
  methods: {
    async validate() {
      if (this.$refs.login.validate()) {
        try {
          let tokenresponse = await this.$auth.loginWith('local', {
            data: {
              username: this.user.username,
              password: this.user.password
            }
          })
          let userresponse = await this.$axios.get('http://localhost:8000/userdata', {
            headers: {
              'Authorization': 'Bearer ' + tokenresponse.data.token
            }
          })
          this.$auth.setUser({ id: userresponse.data.user_id, username: userresponse.data.username })
          this.$toasted.global.Login()
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
}
</script>
<style>
</style>
