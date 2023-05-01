<template>
  <div class="Main_class">
    <div class="Main_div_con">
      <CenterMenu
        class="Main_div_con1"
        v-for="(item, id) in children"
        v-bind="item"
        :key="id"
        @login="Onlogin"
        @login1="Onlogin"
      />
    </div>
    <div v-if="open" class="Main_div_conn2">
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
    children: [
      {
        id: 1,
        name: "Sub Group1",
        children: [
          {
            id: 7,
            name: "Subsub group2",
            children: [
              {
                id: 9,
                name: "Subsub group2",
                children: [
                  { id: 13, name: "Item3", children: [] },
                  { id: 14, name: "Item4", children: [] },
                ],
              },
              { id: 10, name: "Subsub group4", children: [] },
            ],
          },
          { id: 8, name: "Subsub group5", children: [] },
        ],
      },
      {
        id: 2,
        name: "Sub Group2",
        children: [
          { id: 11, name: "Item", children: [] },
          { id: 12, name: "Item", children: [] },
        ],
      },
      {
        id: 3,
        name: "Item3",
        children: [],
      },
      {
        id: 4,
        name: "Item4",
        children: [],
      },
      {
        id: 5,
        name: "Item5",
        children: [],
      },
      {
        id: 6,
        name: "Item6",
        children: [],
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
  width: 720px;
  display: flex;
  justify-self: start;
  flex-direction: column;
  margin: 30px;
  border: 1px solid black;
}

.Main_div_conn2 {
  width: 720px;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 30px;
  border: 1px solid black;
  height: 700px;
}

.Main_div_con {
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 700px;
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

.closeModal:hover{
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
</style>
