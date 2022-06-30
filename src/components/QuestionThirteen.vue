<template>
  <section id="main">
    <div>
      <p>
        Did you get your service through AT&T, Verizon, Campbell Scientific, or
        another carrier?
      </p>
      <div>
        <button @click="$router.push('questionFourteen'), answer('13: AT&T')">
          AT&T
        </button>
      </div>
      <br />
      <div>
        <button
          @click="$router.push('questionFourteen'), answer('13: Verizon')"
        >
          Verizon
        </button>
      </div>
      <br />
      <div>
        <button @click="$router.push('questionFourteen'), answer('13: CSI')">
          CampbellSci
        </button>
      </div>
      <br />
      <div>
        <button
          @click="$router.push('questionFourteen'), answer('13: Other Carrier')"
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
