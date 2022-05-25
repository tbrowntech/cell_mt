<template>
  <section id="main">
    <div id="questionEightb">
      <p>
        Did you get your service through AT&T, Verizon, Campbell Scientific, or
        another carrier?
      </p>
      <div>
        <button
          id="att"
          @click="$router.push('questionNine'), answer('8B: AT&T')"
        >
          AT&T
        </button>
      </div>
      <br />
      <div>
        <button
          id="verizon"
          @click="$router.push('questionNine'), answer('8B: Verizon')"
        >
          Verizon
        </button>
      </div>
      <br />
      <div>
        <button
          id="csi"
          @click="$router.push('questionNine'), answer('8B: CSI')"
        >
          CampbellSci
        </button>
      </div>
      <br />
      <div>
        <button
          id="otherCarrier"
          @click="$router.push('questionNine'), answer('8B: Other Carrier')"
        >
          Other
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
