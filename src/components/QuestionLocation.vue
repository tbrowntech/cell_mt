<template>
  <section id="main">
    <div id="questionLocation">
      <p>
        Are you troubleshooting remotely, or are you on-site with the modem?
      </p>
      <div>
        <button
          id="remote"
          @click="$router.push('questionSymptoms'), answer('Location: Remote')"
        >
          Remote
        </button>
      </div>
      <br />
      <div>
        <button
          id="on-site"
          @click="$router.push('questionSymptoms'), answer('Location: On-site')"
        >
          On-site
        </button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    change() {
      alert("");
    },
    answer(record) {
      console.log(record);
    },
  },
};
</script>
