<template>
  <section>
    <nav>
      <div>
        <button @click="$router.push('/')" id="home">Home</button>
        <button @click="$router.back()">Back</button>
      </div>
      <router-view />
    </nav>
  </section>
</template>

<script></script>
