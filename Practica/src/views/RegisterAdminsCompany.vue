<template>
  <div class="row row-cols-col2 overflow-hidden">
    <div class="Main_div_con col mh-70">
      <button
        class="Main_div_con1"
        style="align-items: center"
        @click="open = true"
      >
        Добавить администратора
      </button>
      <div v-for="(item, id) in children" :key="id" class="Main_div_con1">
        <div class="Main_div_con">
          <div class="Main_div_con3">
            <div class="Main_div_con2">
              <div
                style="display: flex; flex-direction: row; align-items: center"
              >
                <div style="margin-left: 10px">{{ item.name }}</div>
              </div>
              <div class="button_name">
                <button
                  v-on:click.prevent="login1"
                  class="btn btn-outline-dark btn-sm"
                >
                  Подробние
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="Main_div_con col mh-70">
      <div v-if="open" class="Main_div_conn3 col">
        <div class="closeModal" v-on:click="open = false"></div>
        <RegisterAdmin v-bind="form_item" />
      </div>
    </div>
  </div>
</template>

<script>
import RegisterAdmin from "../components/RegisterAdmin.vue";
export default {
  components: { RegisterAdmin },
  data: () => ({
    open: false,
    form_item: {
      name_item: "dd",
      id_item: 1,
      children_item: [],
    },
    children: [
      {
        id: 1,
        name: "Валентин Васильевич Романов",
      },
      {
        id: 2,
        name: "Татьяна Викторовна Ревина",
      },
    ],
  }),
  methods: {
    Onlogin(data) {
      (this.open = !this.open),
        (this.form_item.name_item = data.name),
        (this.form_item.id_item = data.id),
        (this.form_item.children_item = data.children),
        console.log(data);
    },
  },
};
</script>

<style>
.Main_div_con1 {
  position: relative;
  display: flex;
  justify-self: start;
  flex-direction: column;
  margin: 30px;
  border: 1px solid black;
  border-radius: 10px;
}

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

.Main_class {
  display: flex;
  flex-direction: row;
  justify-self: start;
}

.Main_div_con1 {
  position: relative;
  display: flex;
  justify-self: start;
  flex-direction: column;
  margin: 30px;
  border: 1px solid black;
  border-radius: 10px;
}

.Main_div_conn3 {
  display: flex;
  flex-direction: column;
  margin: 30px;
  margin-top: 30px;
  border-radius: 10px;
  height: 70%;
  border: solid black;
  margin: 10px;
}

.Main_div_con {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: 70%;
}

.closeModal {
  position: relative;
  top: 5px;
  left: 95%;
  width: 24px;
  height: 24px;
  opacity: 0.2;
  cursor: pointer;
  transition: opacity ease 0.5s;
}

.closeModal:hover {
  opacity: 1;
}

.closeModal::before,
.closeModal::after {
  content: "";
  position: absolute;
  top: 10px;
  display: block;
  width: 24px;
  height: 3px;
  background: #000;
}

.closeModal::before {
  transform: rotate(45deg);
}

.closeModal::after {
  transform: rotate(-45deg);
}

i {
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transition: 0.5s;
}

.right {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
  transition: 0.5s;
}

.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
  transition: 0.5s;
}

.up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
  transition: 0.5s;
}

.down {
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transition: 0.5s;
}
</style>
