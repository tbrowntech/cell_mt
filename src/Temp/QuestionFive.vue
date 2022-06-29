<template>
  <section id="main">
    <div id="questionFive">
      <p>
        Have you connected your datalogger and modem with an RS232 cable (null
        modem), CS I/O cable, or Ethernet cable?
      </p>
      <div>
        <button
          id="RS232"
          @click="$router.push('questionSix'), answer('5: RS232')"
        >
          RS232
        </button>
      </div>
      <br />
      <div>
        <button
          id="CSInput"
          @click="$router.push('questionSix'), answer('5: CS I/O')"
        >
          CS I/O
        </button>
      </div>
      <br />
      <div>
        <button
          id="ethernet"
          @click="$router.push('questionSix'), answer('5: Ethernet')"
        >
          Ethernet
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
  },
};
</script>
