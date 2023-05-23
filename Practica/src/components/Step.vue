<template>
  <div>
    <div class="Main_div_con">
      <div class="Main_div_con3">
        <div class="Main_div_con2">
          <div style="display: flex; flex-direction: row; align-items: center">
            <div v-on:click.prevent="open = !open" class="Button_open">
              <i class="right" v-bind:class="{ down: open }"></i>
            </div>
            <div style="margin-left: 10px">{{ name }}</div>
          </div>
        </div>
        <div v-show="open" class="Main_div_con4" :key="id">
          {{ main_text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "center-menu",
  props: {
    // eslint-disable-next-line vue/require-prop-type-constructor

    statu: {
      type: Number,
      default: null,
      required: true,
    },
    name: {
      type: String,
      default: null,
      required: true,
    },
    main_text: {
      type: String,
      default: null,
      required: true,
    },
    id: {
      type: Number,
      default: null,
      required: true,
    },
  },
  data: () => ({
    open: false,
  }),
  methods: {
    login(data) {
      this.$emit("login", {
        id: data.id,
        name: data.name,
        children: data.children,
      });
    },

    login1() {
      this.$emit("login1", {
        id: this.id,
        name: this.name,
        children: this.children,
      });
      console.log(this.name);
    },
  },
};
</script>

<style>
.Main_div_con {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.Main_div_con2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 50px;
  font-size: 14pt;
  align-items: center;
  border-radius: 10px;
}

.Button_open {
  font-size: 20pt;
  margin-left: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}

.Main_div_con3 {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.Main_div_con2:hover {
  background-color: rgb(191, 191, 191);
}

.button_name {
  position: absolute;
  right: 15px;
}

.Main_div_con4 {
  min-height: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
}
</style>
