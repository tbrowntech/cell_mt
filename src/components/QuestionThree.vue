<template>
  <section id="main">
    <div>
      <p>Are you replacing an older LS300 or Raven XT cellular modem?</p>
      <img alt="RavenXT" src="../assets/RavenXT.png" />
      <br />
      <img alt="LS300" src="../assets/LS300.png" />
      <div>
        <br />
        <button
          @click="
            message, $router.push('questionFour'), message(), answer('3: Yes')
          "
        >
          Yes
        </button>
      </div>
      <br />
      <div>
        <button @click="$router.push('questionFour'), answer('3: No')">
          No
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    message() {
      alert(
        "Before continuing, verify that you do not have any SerialOpen instructions in your datalogger program that use the exact same port that your new modem will use. It will break the connection with your new modem."
      );
    },
    answer(record) {
      console.log(record);
    },
  },
};
</script>
