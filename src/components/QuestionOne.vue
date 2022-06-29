<template>
  <section id="main">
    <div id="questionLocation">
      <p>
        Are you troubleshooting remotely, or are you on-site with the modem?
      </p>
      <div>
        <button
          id="remote"
          @click="
            $router.push('questionTwo'), change(), answer('Location: Remote')
          "
        >
          Remote
        </button>
      </div>
      <br />
      <div>
        <button
          id="on-site"
          @click="$router.push('questionTwo'), answer('Location: On-site')"
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
