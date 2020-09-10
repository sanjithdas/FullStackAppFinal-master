<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-8 py-5">
        <!--Login Bootstrap Card-->
        <b-card class="text-center shadow-lg bg-light mt-5">
          <h4 slot="header" class="text-primary m-0">Register</h4>
          <b-form-input type="email" name="email" placeholder="email" v-model="email" class="mb-3"></b-form-input>
          <b-form-input type="password" name="password" placeholder="password" v-model="password"></b-form-input>
          <!-- Errors display div-->
          <b-card-text
            v-html="error"
            class="error mt-3"
          >Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          <b-button variant="primary" class="w-100" @click="register">Register</b-button>
        </b-card>
        <!-- /Login Bootstrap Card-->
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  name: "HelloWorld",
  data() {
    return {
      email: "test@test.com",
      password: "password",
      error: null,
    };
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password,
        });
      } catch (error) {
        console.log(error);
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
