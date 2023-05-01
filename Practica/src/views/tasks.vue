<template>
  <div class="Main_class">
    <div class="Main_div_con4">
      <OneTask
        v-for="(item, id) in children"
        v-bind="item"
        :key="id"
        class="Main_div_con5"
      />
    </div>
  </div>
</template>

<script>
import OneTask from "../components/one_task.vue";
export default {
  components: { OneTask },
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
        name: "Сделать что-то",
        children: [
          {
            id: 1,
            text: "шаг 1 dddddddddddddddddddddddddddddddddddddddddddddddd dqqqqqqqqqqqqqqqqqqqqqqqqqqqq wwwwwwwwwwwwwwwwwwwwwwwwe    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeerrrrrrrr tttttttttttttttttttt hhhhhhhhhhhhhhhhhh jwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwddddddddd ddddda aaaaaaaaaaaaaaaaaaaaaaaaaaa ",
            condition: 0,
          },
          {
            id: 2,
            text: "шаг 2",
            condition: 0,
          },
        ],
      },
      {
        id: 2,
        name: "Что-то сделать",
        children: [
          {
            id: 1,
            text: "шаг 1",
          },
          {
            id: 2,
            text: "шаг 2",
          },
        ],
      },
      {
        id: 3,
        name: "Item3",
        children: [
          {
            id: 1,
            text: "шаг 1",
            condition: 0,
          },
          {
            id: 2,
            text: "шаг 2",
            condition: 0,
          },
        ],
      },
      {
        id: 4,
        name: "Item4",
        children: [
          {
            id: 1,
            text: "шаг 1",
            condition: 0,
          },
          {
            id: 2,
            text: "шаг 2",
            condition: 0,
          },
        ],
      },
      {
        id: 5,
        name: "Item5",
        children: [
          {
            id: 1,
            text: "шаг 1",
          },
          {
            id: 2,
            text: "шаг 2",
          },
        ],
      },
      {
        id: 6,
        name: "Item6",
        children: [
          {
            id: 1,
            text: "шаг 1",
            condition: 0,
          },
          {
            id: 2,
            text: "шаг 2",
            condition: 0,
          },
        ],
      },
    ],
  }),
};
</script>

<style>
.Main_class {
  display: flex;
  flex-direction: row;
  justify-self: start;
  width: 100%;
}

.Main_div_con5 {
  display: flex;
  justify-self: start;
  flex-direction: column;
  margin: 30px;
  border: 1px solid black;
}

.Main_div_conn2 {
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 30px;
  border: 1px solid black;
  height: 700px;
}

.Main_div_con4 {
  display: flex;
  flex-direction: column;
  overflow: auto;
  max-height: 700px;
  width: 100%;
}
</style>
