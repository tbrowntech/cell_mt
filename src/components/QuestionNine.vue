<template>
  <section id="main">
    <div>
      <p>Is the power light as seen below on your modem lit?</p>
      <img alt="CEll2XX_LED" src="../assets/CELL210_LED.png" />
      <br />
      <img alt="RV50_LED" src="../assets/RV50_LED.png" />
      <div>
        <button @click="$router.push('questionTen'), answer('9: Yes')">
          Yes
        </button>
      </div>
      <br />
      <div>
        <button @click="message(), answer('9: No')">No</button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    message() {
      alert(
        "Make sure the modem has power from a 12V power source. Connect the modem to a 12V power source and click 'Yes' to continue. If the modem is connected to a 12V power source and still doesn't power on, check that your 12V power source is good."
      );
    },
    answer(record) {
      console.log(record);
    },
  },
};
</script>
