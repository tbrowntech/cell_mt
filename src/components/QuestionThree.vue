<template>
  <section id="main">
    <div id="questionTwo">
      <p>Are you replacing an older LS300 or Raven XT cellular modem?</p>
      <img alt="RavenXT" src="../assets/RavenXT.png" />
      <br />
      <img alt="LS300" src="../assets/LS300.png" />
      <div>
        <br />
        <button
          id="q2yes"
          @click="
            message, $router.push('questionFour'), change(), answer('2: Yes')
          "
        >
          Yes
        </button>
      </div>
      <br />
      <div>
        <button
          id="q2no"
          @click="$router.push('questionFour'), answer('2: No')"
        >
          No
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    change() {
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
