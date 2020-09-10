<template>
  <div>
    <Panel title="Search">
      <b-form-input v-model="search">  </b-form-input>
    </Panel>
  </div>
</template>

<script>
import Panel from  './Panel';
export default {
  name: 'Search',
  components: { Panel },
  props: {
    msg: String
  },
  data() {
    return {
      search : '',
    }
  },
  watch: {
    search(value){
      console.log(value);
      const route = {name: 'browse'}

      if (this.search !== ''){
        route.query = {
          search : this.search
        }
      }
      this.$router.push(route);
    },
    /**
     * allow to watch any query change  in the address bar..
     */
    "$route.query.search":{
      immediate: true,
      handler(value){
        this.search = value
      }
    }
  },
}
</script>


