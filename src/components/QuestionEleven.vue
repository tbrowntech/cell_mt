<template>
  <section id="main">
    <div id="questionEleven">
      <p>
        Does your cellular account come with a public static IP address, or a
        private dynamic IP address?
      </p>
      <div>
        <button
          id="publicIP"
          @click="$router.push('questionLocation'), answer('11: Public Static')"
        >
          Public Static
        </button>
      </div>
      <br />
      <div>
        <button
          id="privateIP"
          @click="
            $router.push('questionLocation'), answer('9: Private Dynamic')
          "
        >
          Private Dynamic
        </button>
      </div>
      <br />
      <div>
        <button
          id="unsure"
          @click="
            $router.push('questionLocation'), change(), answer('9: Unsure')
          "
        >
          Unsure
        </button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    change() {
      alert(
        "Contact the person in your office who handles your cellular service"
      );
    },
    answer(record) {
      console.log(record);
    },
  },
};
</script>
