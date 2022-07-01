<template>
  <section id="main">
    <div>
      <p>
        Have you set up the Konect PakBus Router and entered the DNS address,
        port number, and TCP password into your datalogger?
      </p>
      <div>
        <button @click="$router.push('r1q3'), answer('')">Yes</button>
      </div>
      <br />
      <div>
        <button @click="message(), answer('')">No</button>
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
