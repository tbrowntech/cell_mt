<template>
  <section id="main">
    <div>
      <p>What model datalogger are you connecting to your modem?</p>
      <div>
        <button @click="(isShowOS = !isShowOS), answer('4: Integrated')">
          CR300-CELL2XX integrated
        </button>
        <div v-if="isShowOS"></div>
        <div v-else>
          <p>Is the logger running OS 10.06?</p>
          <button @click="(isShowPower = !isShowPower), answer('4a: Yes')">
            Yes
          </button>
          <button @click="message1(), answer('4a: No')">No</button>
          <div v-if="isShowPower"></div>
          <div v-else>
            <p>Is the datalogger getting power from a 12V source?</p>
            <button @click="$router.push('questionEleven'), answer('4b: Yes')">
              Yes
            </button>
            <button @click="message2(), answer('4b: No')">No</button>
          </div>
        </div>
        <br />
        <button
          @click="
            $router.push('questionFive'), answer('4: CR1000/850/800/3000')
          "
        >
          CR1000/850/800/3000
        </button>
        <br />
        <br />
        <button @click="$router.push('questionFive'), answer('4: CR1000X/CR6')">
          CR1000X/CR6
        </button>
        <br />
        <br />
        <button
          @click="$router.push('questionFive'), answer('4: CR300/310/350')"
        >
          CR300(non-integrated)/310/350
        </button>
        <br />
        <br />
        <button @click="$router.push('questionFive'), answer('4: Other')">
          Other
        </button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data: function () {
    return {
      isShowOS: true,
      isShowPower: true,
    };
  },
  methods: {
    answer(record) {
      console.log(record);
    },
    message1() {
      alert(
        "Please update your logger to the newest OS, as this can solve a lot of connection issues."
      );
    },
    message2() {
      alert(
        "Please connect your logger to a 12V power source in order for the modem to work. Click yes to continue."
      );
    },
  },
};
</script>
