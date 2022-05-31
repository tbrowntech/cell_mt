<template>
  <section id="main">
    <div id="one">
      <p>
        Is your modem setup on a station that was working and then it stopped?
        Or is it a new setup?
      </p>
      <div>
        <button @click="$router.push('questionThree'), answer('1: Stopped')">
          Stopped
        </button>
      </div>
      <br />
      <div>
        <button @click="$router.push('questionTwo'), answer('1: New Setup')">
          New Setup
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "QuestionOne",
  methods: {
    answer(record) {
      console.log(record);
    },
  },
};
//document.getElementById().value <--use this possibly to record the button somewhere instead of just the console.
</script>
