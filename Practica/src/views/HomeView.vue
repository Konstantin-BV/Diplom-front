<template>
  <div class="row row-cols-col2 overflow-hidden">
    <div class="Main_div_con col mh-70" style="max-height: 700px">
      <div v-for="(item, id) in children" :key="id">
        <CenterMenu
          class="Main_div_con1"
          v-for="(item1, id) in item"
          v-bind="item1"
          :key="id"
          @login="Onlogin"
          @login1="Onlogin"
        />
      </div>
    </div>
    <div v-if="open" class="Main_div_conn2 col">
      <div class="closeModal" v-on:click="open = false"></div>
      <ItemInfo v-bind="form_item" />
    </div>
  </div>
</template>

<script>
import CenterMenu from "../components/CenterMenu.vue";
import ItemInfo from "../components/ItemInfo.vue";
export default {
  components: { CenterMenu, ItemInfo },
  data: () => ({
    open: false,
    form_item: {
      name_item: "dd",
      id_item: 1,
      children_item: [],
    },
    children: [],
  }),
  beforeCreate: function () {
    this.$store
      .dispatch("GetDiportamentTree")
      .then((resp) => ((this.children = resp.data), console.log(resp)))
      .catch((err) => console.log(err));
  },
  methods: {
    Onlogin(data) {
      (this.open = !this.open),
        (this.form_item.name_item = data.title),
        (this.form_item.id_item = data.id),
        (this.form_item.children_item = data.children),
        console.log(data.title);
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

.Main_div_conn2 {
  display: flex;
  flex-direction: column;
  margin: 30px;
  margin-top: 30px;
  border: 1px solid black;
  border-radius: 10px;
  height: 70%;
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
