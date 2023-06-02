<template>
  <div>
    <div class="Main_div_con">
      <div class="Main_div_con3">
        <div class="Main_div_con2">
          <div style="display: flex; flex-direction: row; align-items: center">
            <div>
              <div v-on:click.prevent="open = !open" class="Button_open">
                <i class="right" v-bind:class="{ down: open }"></i>
              </div>
            </div>
            <div style="margin-left: 10px">{{ title }}</div>
          </div>
          <div class="button_name1">
            <div class="dropdown" style="margin-right: 10px">
              <div class="bbbb">
                <button
                  v-on:click.prevent="login1"
                  class="btn btn-outline-dark btn-sm"
                  style="margin-right: 10px"
                >
                  Подробние
                </button>

                <button
                  class="btn btn-outline-dark btn-sm dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Добавить
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a
                      class="dropdown-item"
                      v-on:click.prevent="login1"
                      href="#"
                      >Сотрудника</a
                    >
                  </li>
                  <li>
                    <a class="dropdown-item" v-on:click="GetDipor" href="#"
                      >Подотдел</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div v-show="open" class="Main_div_con4" :key="id">
          <div v-for="(item, id) in children" :key="id">
            <CenterMenuCompany
              v-for="(item1, id) in item"
              v-bind="item1"
              :key="id"
              @login1="login"
              @GetDipor="GetDipor1"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CenterMenuCompany",
  props: {
    // eslint-disable-next-line vue/require-prop-type-constructor

    children: {
      type: Array,
      default: null,
      required: true,
    },
    title: {
      type: String,
      default: null,
      required: true,
    },
    parent_id: {
      type: Number,
      default: null,
      required: true,
    },
    company_id: {
      type: Number,
      default: null,
      required: true,
    },
    description: {
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
    GetDipor() {
      this.$emit("GetDipor", {
        id: this.id,
        name: this.name,
        children: this.children,
      });
      console.log(this.id);
    },
    GetDipor1(data) {
      this.$emit("GetDipor", {
        id: data.id,
        name: data.name,
        children: data.children,
      });
      console.log(this.id);
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

.bbbb {
  display: flex;
  flex-direction: row;
  overflow: hidden;
}

.button_name {
  position: absolute;
  right: 15px;
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

.button_name1 {
  display: flex;
  position: absolute;
  right: 15px;
  flex: row;
}

.Main_div_con4 {
  min-height: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
}
</style>
