<template>
  <div>
    <!--Navbar-->
    <b-navbar
      toggleable="sm"
      type="light"
      variant="light"
      fixed="top"
      class="shadow-lg border-bottom"
    >
      <b-navbar-brand to="/">Vue Project</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link href="/browse" to="/browse">Browse</router-link>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <router-link
              v-if="!$store.state.isUserLoggedIn"
              to="/login"
              class="btn btn-primary mr-2"
            >Login</router-link>

            <router-link
              v-if="!$store.state.isUserLoggedIn"
              to="/register"
              class="btn btn-secondary"
            >Register</router-link>

            <b-button
              v-if="$store.state.isUserLoggedIn"
              class="btn btn-secondary mr-2"
              @click = "logout"
            >Logout</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!--/Navbar-->
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    msg: String,
  },
  methods: {
    logout: function(){
      this.$store.dispatch('setToken',null);
      this.$store.dispatch('setUser',null);
      this.$router.push({name: 'root'})
    }
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
