<template>
  <section id="main">
    <div>
      <p>
        Which cellular modem are you using or which new modem are you
        installing?
      </p>
      <div>
        <button @click="$router.push('questionEight'), answer('7: CELL2XX')">
          CELL2XX
        </button>
      </div>
      <br />
      <div>
        <button @click="$router.push('questionEight'), answer('7: SW')">
          RV50(X)
        </button>
      </div>
      <br />
      <div>
        <button
          @click="
            $router.push('questionEight'),
              message2(),
              answer('7: Other Sierra Wireless Modem')
          "
        >
          Other Sierra Wireless Modem
        </button>
      </div>
      <br />
      <div>
        <button
          @click="
            $router.push('questionEight'), message1(), answer('7: Other Modem')
          "
        >
          Other Modem
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
    message1() {
      alert(
        "You may need to contact CSI technical support because we don't support other modems but might be able to offer some insight."
      );
    },
    message2() {
      alert(
        "Verify that the modem supports 4G/LTE, as 3G is being deprecated by many wireless providers."
      );
    },
  },
};
</script>
