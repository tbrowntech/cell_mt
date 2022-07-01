<template>
  <section id="main">
    <div>
      <p>What symptoms are you experiencing with your connection?</p>
    </div>
    <div>
      <button @click="$router.push('r1q1')">
        Modem is showing that it's connected, but I cannot connect to my
        datalogger
      </button>
    </div>
    <br />
    <div>
      <button>
        Can't connect with datalogger and modem shows signs it isn't connected
      </button>
    </div>
    <br />
    <div><button>My connection is intermittent</button></div>
    <br />
    <div>
      <button
        @click="
          $router.push('end'), message(), answer('15: Other reason not listed')
        "
      >
        Other reason not listed
      </button>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    answer(record) {
      console.log(record);
    },
    message() {
      alert(
        "Please contact CSI technical support by submitting a web request or by calling 435-227-9100."
      );
    },
  },
};
</script>
