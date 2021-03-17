<template>
  <v-app>
    <v-main>
      <Landing />
    </v-main>
  </v-app>
</template>

<script>
import Landing from "./views/Landing.vue";
export default {
  name: "App",

  components: {
    Landing,
  },

  data: () => ({
    //
  }),
};
</script>
