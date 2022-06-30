<template>
  <section id="main">
    <div>
      <p>What is the color of the power light?</p>
      <div>
        <button @click="$router.push('questionEleven'), answer('10: Green')">
          Green
        </button>
      </div>
      <br />
      <div>
        <button @click="$router.push('questionEleven'), answer('10: Amber')">
          Amber
        </button>
      </div>
      <br />
      <div>
        <button @click="$router.push('questionEleven'), answer('10: Red')">
          Red
        </button>
      </div>
      <br />
      <div>
        <button @click="$router.push('questionEleven'), answer('10: Blue')">
          Blue
        </button>
      </div>
      <br />
      <div>
        <button @click="$router.push('questionEleven'), answer('10: Combo')">
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
