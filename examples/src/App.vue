<template>
  <div>
    <h1 class="title">hankei-design 组件展示</h1>
  <nav class="nav">
    <router-link to="/">Button</router-link>
    <router-link to="/card">Card</router-link>
  </nav>
  <div class="displayArea">
    <router-view></router-view>
  </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
h1.title {
  text-align: center;
  // margin-top: 5em;
  font-weight: 200;
}
p {
  text-align: center;
  font-weight: 200;
  margin-top: 1em;
  font-size: 18px;
}

.nav {
  // border: 1px solid #ccc;
  display: flex;
  height: 50px;
  justify-content: space-evenly;
  align-items: center;
}

.displayArea {
  margin-top: 2em;
  // border: 1px solid #ccc;
  display: flex;
  justify-content: center;
}
.active {
  border-bottom: 3px solid hsla(160, 100%, 37%, 1);
}
</style>

