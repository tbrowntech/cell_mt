<template>
  <section id="main">
    <div>
      <p>Does your modem already have cellular service?</p>
      <div>
        <button @click="$router.push('questionThirteen'), answer('12: Yes')">
          Yes
        </button>
      </div>
      <br />
      <div>
        <button
          @click="$router.push('questionThirteen'), message(), answer('12: No')"
        >
          No
        </button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    message() {
      alert(
        "Please make sure the modem has service with a cellular provider, and an activated SIM card inserted into the modem."
      );
    },
    answer(record) {
      console.log(record);
    },
  },
};
</script>
