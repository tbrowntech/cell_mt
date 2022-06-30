<template>
  <section id="main">
    <div>
      <p>
        Have you connected your datalogger and modem with an RS232 cable (null
        modem), CS I/O cable, Ethernet cable, or other COM port?
      </p>
      <div>
        <button
          @click="$router.push('questionSeven'), message(), answer('6: RS232')"
        >
          RS232
        </button>
      </div>
      <br />
      <div>
        <button
          @click="$router.push('questionSeven'), message(), answer('6: CS I/O')"
        >
          CS I/O
        </button>
      </div>
      <br />
      <div>
        <button
          @click="
            $router.push('questionSeven'), message(), answer('6: Ethernet')
          "
        >
          Ethernet
        </button>
      </div>
      <br />
      <div>
        <button
          @click="
            $router.push('questionSeven'),
              message(),
              answer('6: Other COM port')
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
    message() {
      alert(
        "Verify that the cable is the correct cable and properly connected."
      );
    },
  },
};
</script>
