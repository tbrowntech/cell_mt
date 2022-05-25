<template>
  <section id="main">
    <div id="questionSevenb">
      <p>What is the color of the light?</p>
      <div>
        <button
          id="green"
          @click="$router.push('questionEightA'), answer('7B: Green')"
        >
          Green
        </button>
      </div>
      <br />
      <div>
        <button
          id="amber"
          @click="$router.push('questionEightA'), answer('7B: Amber')"
        >
          Amber
        </button>
      </div>
      <br />
      <div>
        <button
          id="red"
          @click="$router.push('questionEightA'), answer('7B: Red')"
        >
          Red
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
