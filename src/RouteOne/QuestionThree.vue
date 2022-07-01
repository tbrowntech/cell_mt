<template>
  <section id="main">
    <div>
      <p>Question 3, Route 1</p>
      <div>
        <button @click="$router.push(''), answer('')">Yes</button>
      </div>
      <br />
      <div>
        <button @click="$router.push(''), answer('')">No</button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    message() {
      alert(
        "In order for a datalogger to work with a modem that has a private dynamic IP address, the Konect PakBus Router needs to be set up and information entered into the logger. Please do this and then if the connection issue persists, click yes to continue."
      );
    },
    answer(record) {
      console.log(record);
    },
  },
};
</script>
