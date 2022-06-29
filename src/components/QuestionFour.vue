<template>
  <section id="main">
    <div id="questionFour">
      <p>What model datalogger are you connecting to your modem?</p>
      <div>
        <button @click="isShow = !isShow">CR300-CELL2XX integrated</button>
        <div v-if="isShow"></div>
        <div v-else>
          <p>Is the logger running OS 10.06?</p>
          <button>Yes</button>
          <button>No</button>
        </div>
        <br />
        <button @click="$router.push('questionFive')">
          CR1000/800/850/3000
        </button>
        <br />
        <br />
        <button @click="$router.push('questionFive')">CR1000X/CR6</button>
        <br />
        <br />
        <button @click="$router.push('questionFive')">
          CR300(non-integrated)/310/350
        </button>
        <br />
        <br />
        <button @click="$router.push('questionFive')">Other</button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data: function () {
    return {
      isShow: true,
    };
  },
  methods: {
    answer(record) {
      console.log(record);
    },
  },
};
</script>
