<template>
  <section id="main">
    <div>
      <p>
        Are you troubleshooting remotely, or are you on-site with the modem?
      </p>
      <div>
        <button
          @click="$router.push('questionTwo'), change(), answer('1: Remote')"
        >
          Remote
        </button>
      </div>
      <br />
      <div>
        <button @click="$router.push('questionTwo'), answer('1: On-site')">
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
      alert(
        "Note: there may not be much that can be done to correct the problem remotely. Be aware that it might be necessary to schedule a site visit."
      );
    },
    answer(record) {
      console.log(record);
    },
  },
};
</script>
