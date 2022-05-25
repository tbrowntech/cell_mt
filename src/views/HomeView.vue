<template>
  <div class="home">
    <img alt="CSI logo" src="../assets/CSILogo.png" />
    <br />
    <button @click="$router.push('questionOne')">Start</button>
    <FootNav msg="Welcome to the cell modem troubleshooting wizard" />
  </div>
</template>

<script>
// @ is an alias to /src
import FootNav from "@/components/FootNav.vue";

export default {
  name: "HomeView",
  components: {
    FootNav,
  },
};
</script>
