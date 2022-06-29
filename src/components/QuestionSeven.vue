<template>
  <section id="main">
    <div id="questionThree">
      <p>
        Which cellular modem are you using or which new modem are you
        installing?
      </p>
      <div>
        <button
          id="CELL2XX"
          @click="$router.push('questionFive'), answer('3: CELL2XX')"
        >
          CELL2XX
        </button>
      </div>
      <br />
      <div>
        <button id="sw" @click="$router.push('questionFive'), answer('3: SW')">
          RV50(X)
        </button>
      </div>
      <br />
      <div>
        <button
          id="integrated"
          @click="$router.push('questionNine'), answer('3: Integrated')"
        >
          CR300-CELL2XX
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
