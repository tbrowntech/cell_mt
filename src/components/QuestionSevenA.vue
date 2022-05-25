<template>
  <section id="main">
    <div id="questionSevena">
      <p>Is the power light as seen below on your datalogger lit?</p>
      <img alt="DLPowerLight" src="../assets/PowerLight.jpg" />
      <div>
        <button
          id="q7yes"
          @click="$router.push('questionSevenB'), answer('7A: Yes')"
        >
          Yes
        </button>
      </div>
      <br />
      <div>
        <button id="q7no" @click="change(), answer('7A: No')">No</button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    change() {
      alert(
        "Make sure your datalogger and modem are powered on. If you have a CR1000, there won't be a power light. Make sure the datalogger and modem have power and press yes to continue."
      );
    },
    answer(record) {
      console.log(record);
    },
  },
};
</script>
