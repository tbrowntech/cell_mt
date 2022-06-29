<template>
  <section id="main">
    <div id="questionSix">
      <p>How is your modem connected to power?</p>
      <div>
        <button
          id="CSIOpower"
          @click="$router.push('questionSeven'), answer('6: CS I/O Power')"
        >
          CS I/O
        </button>
      </div>
      <br />
      <div>
        <button
          id="12V"
          @click="$router.push('questionSeven'), answer('6: 12V')"
        >
          12V Port/Power Cable
        </button>
      </div>
      <br />
      <div>
        <button
          id="sw12"
          @click="$router.push('questionSeven'), sw12(), answer('6: sw12')"
        >
          SW12 Port
        </button>
      </div>
      <br />
      <div>
        <button
          id="batt"
          @click="$router.push('questionSeven'), answer('6: battery')"
        >
          Direct to Battery
        </button>
      </div>
      <br />
      <div>
        <button
          id="a12Vother"
          @click="$router.push('questionSeven'), answer('6: 12V Other')"
        >
          Other 12V Source
        </button>
      </div>
      <br />
      <div>
        <button
          id="usb"
          @click="$router.push('questionSeven'), change(), answer('6: USB')"
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
    change() {
      alert("Connect your modem to a 12V power source");
    },
    sw12() {
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
