<template>
  <v-container>
    <v-row align='center' justify='center' style='height:100vh' dense>
      <v-col class='justify-center align-center'>
        <v-card elevation='12' class='rounded-xl' rounded min-height='50vh'>
          <v-row>
            <v-col cols='12' md='6' class='teal accent-1 rounded-l-xl' style='min-height: 50vh'>
              <v-container fluid>
                <div class='display-1 font-weight-medium text-md-center '>
                  Your Personal wiki for Leetcode
                </div>
                <div class='headline font-weight-light text-justify pt-3 font-italic'>
                  Morbi mattis ullamcorper velit. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Fusce
                  convallis metus id felis luctus adipiscing. Aenean massa. Vestibulum purus quam, scelerisque ut,
                  mollis sed, nonummy id, metus. Nulla consequat massa quis enim.
                </div>
              </v-container>
            </v-col>
            <v-col col='12' md='6'>
              <v-card-title class='text-right font-weight-medium text-h4'>Login</v-card-title>
              <v-form ref='login' lazy-validation>
                <v-card-text>
                  <v-text-field v-model='user.username' label='Username' placeholder='Username'
                                :rules='[required]'
                                dense solo
                                filled></v-text-field>
                  <v-text-field :v-model='user.password'
                                :append-icon="passShow ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="passShow ? 'text' : 'password'"
                                :rules='[required,min]'
                                label='Password'
                                hint='At least 8 characters' placeholder='Password'
                                counter dense solo filled
                                @click:append='passShow=!passShow'></v-text-field>
                </v-card-text>
                <v-card-actions>
                  <v-row align='center' justify='space-around'>
                    <v-btn
                      class='mr-4 rounded-lg' elevation='2' color=' green accent-4 '
                      text outlined ripple
                      min-width='100'
                      @click='validate'>
                      Login
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
        username: null,
        password: null
      },
      required: value => !!value || 'Required.',
      min: v => (v && v.length >= 8) || 'Minimum 8 characters'
    }
  },
  methods: {
    validate() {
      if (this.$refs.login.validate()) {
        console.log('SUCCESS')
        // CODE TO LOGIN USER
      }
    }
  }

}
</script>
<style>
</style>
