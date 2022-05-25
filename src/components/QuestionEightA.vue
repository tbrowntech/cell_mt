<template>
  <section id="main">
    <div id="questionEighta">
      <p>Does your modem already have cellular service?</p>
      <div>
        <button
          id="q8ayes"
          @click="$router.push('questionEightB'), answer('8A: Yes')"
        >
          Yes
        </button>
      </div>
      <br />
      <div>
        <button
          id="q8ano"
          @click="$router.push('questionEightB'), change(), answer('8A: No')"
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
      alert("This could be the connection issue");
    },
    answer(record) {
      console.log(record);
    },
  },
};
</script>
