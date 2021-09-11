<template>
  <div>
    <v-treeview
      color='pink accent-2'
      return-object
      activatable transition hoverable open-on-click
      :items=sortedProblems
      item-key='name'
      @update:active='onUpdate'>
      <template slot='label' slot-scope='{ item }'>
        <p class='ma-0 pa-0' @click='onUpdate(item)'>{{ item.name }} </p>
      </template>
    </v-treeview>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NavDrawer',
  props: {
    drawer: Boolean
  },
  data() {
    return {
      navigation: {
        shown: false,
        width: 200,
        borderSize: 3
      }
    }
  },
  computed: {
    direction() {
      return this.navigation.shown === false ? 'Open' : 'Closed'
    },
    ...mapState(['sortedProblems'])
  },
  async created() {},
  mounted() {},
  methods: {
    onUpdate(item) {
      if (item.length > 0) {
        this.$store.dispatch('setSPslug', item[0].id)
      }
    }
  }
}
</script>

<style>
.v-treeview-node__content, .v-treeview-node__label {
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
}

.v-treeview-node__root {
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
}
</style>
