<template>
  <section id="main">
    <div id="questionFive">
      <p>
        Have you connected your datalogger and modem with an RS232 cable (null
        modem), CS I/O cable, Ethernet cable, or COM port?
      </p>
      <div>
        <button
          id="RS232"
          @click="$router.push('questionSeven'), change(), answer('5: RS232')"
        >
          RS232
        </button>
      </div>
      <br />
      <div>
        <button
          id="CSInput"
          @click="$router.push('questionSeven'), change(), answer('5: CS I/O')"
        >
          CS I/O
        </button>
      </div>
      <br />
      <div>
        <button
          id="ethernet"
          @click="
            $router.push('questionSeven'), change(), answer('5: Ethernet')
          "
        >
          Ethernet
        </button>
      </div>
      <br />
      <div>
        <button
          id="other"
          @click="
            $router.push('questionSeven'), change(), answer('5: Other COM port')
          "
        >
          Other COM port
        </button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    answer(record) {
      console.log(record);
    },
    change() {
      alert(
        "Verify that the cable is the correct cable and properly connected."
      );
    },
  },
};
</script>
