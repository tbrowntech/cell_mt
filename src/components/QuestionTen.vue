<template>
  <section id="main">
    <div id="questionTen">
      <p>
        Did you get your service through AT&T, Verizon, Campbell Scientific, or
        another carrier?
      </p>
      <div>
        <button
          id="att"
          @click="$router.push('questionEleven'), answer('10: AT&T')"
        >
          AT&T
        </button>
      </div>
      <br />
      <div>
        <button
          id="verizon"
          @click="$router.push('questionEleven'), answer('10: Verizon')"
        >
          Verizon
        </button>
      </div>
      <br />
      <div>
        <button
          id="csi"
          @click="$router.push('questionEleven'), answer('10: CSI')"
        >
          CampbellSci
        </button>
      </div>
      <br />
      <div>
        <button
          id="otherCarrier"
          @click="$router.push('questionEleven'), answer('10: Other Carrier')"
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
