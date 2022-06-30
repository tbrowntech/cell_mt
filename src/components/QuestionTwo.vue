<template>
  <section id="main">
    <div>
      <p>
        Is your modem setup on a station that was working and then it stopped?
        Or is it a new setup?
      </p>
      <div>
        <button @click="$router.push('questionFour'), answer('2: Stopped')">
          Stopped
        </button>
      </div>
      <br />
      <div>
        <button @click="$router.push('questionThree'), answer('2: New Setup')">
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
</script>
