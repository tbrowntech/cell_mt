<template>
  <section id="main">
    <div>
      <p>
        Does your cellular account come with a public static IP address, or a
        private dynamic IP address?
      </p>
      <div>
        <button @click="$router.push('r1q3'), answer('r1q1: Public Static')">
          Public Static
        </button>
      </div>
      <br />
      <div>
        <button @click="$router.push('r1q2'), answer('r1q1: Private Dynamic')">
          Private Dynamic
        </button>
      </div>
      <br />
      <div>
        <button @click="message(), answer('r1q1: Unsure')">Unsure</button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    message() {
      alert(
        "Contact the person in your office who handles your cellular service."
      );
    },
    answer(record) {
      console.log(record);
    },
  },
};
</script>
