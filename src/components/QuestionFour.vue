<template>
  <section id="main">
    <div id="questionFour">
      <p>What model datalogger are you connecting to your modem?</p>
      <div>
        <button
          id="CR1000"
          @click="$router.push('questionFive'), answer('4: CR1000')"
        >
          CR1000
        </button>
      </div>
      <br />
      <div>
        <button
          id="CR800"
          @click="$router.push('questionFive'), answer('4: CR800')"
        >
          CR800
        </button>
      </div>
      <br />
      <div>
        <button
          id="CR3000"
          @click="$router.push('questionFive'), answer('4: CR3000')"
        >
          CR3000
        </button>
      </div>
      <br />
      <div>
        <button
          id="CR1000X"
          @click="$router.push('questionFive'), answer('4: CR1000X')"
        >
          CR1000X
        </button>
      </div>
      <br />
      <div>
        <button
          id="CR6"
          @click="$router.push('questionFive'), answer('4: CR6')"
        >
          CR6
        </button>
      </div>
      <br />
      <div>
        <button
          id="CR300"
          @click="$router.push('questionFive'), answer('4: CR300')"
        >
          CR300 series
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
