<template>
  <section id="main">
    <div id="questionEight">
      <p>What is the color of the light?</p>
      <div>
        <button
          id="green"
          @click="$router.push('questionNine'), answer('8: Green')"
        >
          Green
        </button>
      </div>
      <br />
      <div>
        <button
          id="amber"
          @click="$router.push('questionNine'), answer('8: Amber')"
        >
          Amber
        </button>
      </div>
      <br />
      <div>
        <button
          id="red"
          @click="$router.push('questionNine'), answer('8: Red')"
        >
          Red
        </button>
      </div>
      <br />
      <div>
        <button
          id="blue"
          @click="$router.push('questionNine'), answer('8: Red')"
        >
          Blue
        </button>
      </div>
      <br />
      <div>
        <button
          id="combo"
          @click="$router.push('questionNine'), answer('8: Red')"
        >
          Combination of colors
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
