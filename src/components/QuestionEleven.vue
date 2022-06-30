<template>
  <section id="main">
    <p>Is there a compatible antenna attached to the modem?</p>
    <button @click="$router.push('questionTwelve'), answer('11: Yes')">
      Yes
    </button>
    <br />
    <br />
    <button @click="message(), answer('11: No')">No</button>
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
        "Please find and attach a compatible antenna. You must attach an antenna and press yes to proceed."
      );
    },
  },
};
</script>
