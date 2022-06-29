<template>
  <section id="main">
    <p>Is the OS of the datalogger the latest OS?</p>
    <button @click="$router.push('questionSix')">Yes</button>
    <br />
    <br />
    <button @click="$router.push('questionSix'), change()">No</button>
  </section>
</template>

<script>
export default {
  methods: {
    change() {
      alert(
        "We recommend updating the OS to the latest version, as this could be part of the connection issue."
      );
    },
  },
};
</script>
