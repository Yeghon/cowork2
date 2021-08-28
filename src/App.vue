<template>
  <router-view/>
</template>

<script>

export default {
  name: 'App',
}
</script>
<style>
@font-face {
  font-family: "Typo_Round_bold";
  src: local("Typo_Round_bold"),
  url(../public/css/Typo_Round_Bold_Demo.otf) format("truetype");
}

* {
  font-family: Typo_Round_bold;
}
</style>
