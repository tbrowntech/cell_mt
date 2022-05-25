<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>
      For questions about other products, please refer to our website
      <a href="https://www.campbellsci.com" target="_blank" rel="noopener"
        >Campbell Scientific</a
      >.
    </p>
  </div>
</template>

<script>
export default {
  name: "FootNav",
  props: {
    msg: String,
  },
};
</script>
