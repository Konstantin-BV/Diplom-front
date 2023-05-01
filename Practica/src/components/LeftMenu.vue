<template>
  <div class="leftmenu" v-bind:class="{ menu_activ: activ }">
    <button v-on:click.prevent="activ = !activ" class="btn"></button>
    <router-link :to="'/'">ссс</router-link>
    <router-link style="margin-top: 30px" :to="'tasks'">ссс</router-link>
    <router-link style="margin-top: 30px" :to="'/'">ссс</router-link>
  </div>
</template>

<script>
export default {
  data: () => ({
    activ: true,
  }),
  setup() {},
};
</script>

<style scoped>
.leftmenu {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: start;
  transition: 0.5s;
  transform: translateX(-100%);
}

.menu_activ {
  transform: translateX(0%);
}

.hr {
  width: 300px;
  align-self: center;
  margin-top: 30px;
  height: 30px;
}

.btn {
  width: 30px;
  height: 30px;
  color: #F0E68C;
  top: 0;
  right: -100%;
}
</style>
