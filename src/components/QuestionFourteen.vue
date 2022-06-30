<template>
  <section id="main">
    <div>
      <p>
        Does your cellular account come with a public static IP address, or a
        private dynamic IP address?
      </p>
      <div>
        <button
          @click="$router.push('questionFifteen'), answer('14: Public Static')"
        >
          Public Static
        </button>
      </div>
      <br />
      <div>
        <button
          @click="
            $router.push('questionFifteen'),
              message2(),
              answer('14: Private Dynamic')
          "
        >
          Private Dynamic
        </button>
      </div>
      <br />
      <div>
        <button
          @click="
            $router.push('questionFifteen'), message1(), answer('14: Unsure')
          "
        >
          Unsure
        </button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    message1() {
      alert(
        "Contact the person in your office who handles your cellular service."
      );
    },
    message2() {
      alert(
        "Make sure you have set up the KonectGDS router and entered the DNS address, port number, and TCP password into your datalogger."
      );
    },
    answer(record) {
      console.log(record);
    },
  },
};
</script>
