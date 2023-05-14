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
      <div class="Main_div_con1" v-for="(item, id) in children" :key="id">
        {{ item.name }}
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
        name: "Sub Group1",
      },
      {
        id: 2,
        name: "Sub Group2",
      },
      {
        id: 3,
        name: "Item3",
      },
      {
        id: 4,
        name: "Item4",
      },
      {
        id: 5,
        name: "Item5",
      },
      {
        id: 6,
        name: "Item6",
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
