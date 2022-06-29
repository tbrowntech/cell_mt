<template>
  <section id="main">
    <div id="questionNine">
      <p>Does your modem already have cellular service?</p>
      <div>
        <button
          id="q8ayes"
          @click="$router.push('questionTen'), answer('9: Yes')"
        >
          Yes
        </button>
      </div>
      <br />
      <div>
        <button
          id="q8ano"
          @click="$router.push('questionTen'), change(), answer('9: No')"
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
    change() {
      alert("Please make sure the modem has service with a cellular provider");
    },
    answer(record) {
      console.log(record);
    },
  },
};
</script>
