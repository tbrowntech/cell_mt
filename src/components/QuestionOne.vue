<template>
    <section id="main">
        <!--question 1 div-->
        <div id="one">
            <p>
              Is your modem setup on a station that was working and then it stopped? Or is it a new setup?
            </p>
            <div>
                <button @click="$router.replace('questionTwo')">Stopped</button>
            </div>
            <br>
            <div>
                <button @click="$router.replace('questionTwo')">New Setup</button>
            </div>            
        </div>       
    </section>
</template>

<script>
export default {
  name: 'QuestionOne',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
