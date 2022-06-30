<template>
  <section id="main">
    <div>
      <p>How is your modem connected to power?</p>
      <div>
        <button
          @click="$router.push('questionNine'), answer('8: CS I/O Power')"
        >
          CS I/O
        </button>
      </div>
      <br />
      <div>
        <button @click="$router.push('questionNine'), answer('8: 12V')">
          12V Port/Power Cable
        </button>
      </div>
      <br />
      <div>
        <button
          @click="$router.push('questionNine'), message2(), answer('8: sw12')"
        >
          SW12 Port
        </button>
      </div>
      <br />
      <div>
        <button @click="$router.push('questionNine'), answer('8: battery')">
          Direct to Battery
        </button>
      </div>
      <br />
      <div>
        <button @click="$router.push('questionNine'), answer('8: 12V Other')">
          Other 12V Source
        </button>
      </div>
      <br />
      <div>
        <button
          @click="$router.push('questionNine'), message1(), answer('8: USB')"
        >
          USB only
        </button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    message1() {
      alert("Connect your modem to a 12V power source");
    },
    message2() {
      alert(
        "Make sure your SW12 port is turned/turning on through your datalogger program"
      );
    },
    answer(record) {
      console.log(record);
    },
  },
};
</script>
