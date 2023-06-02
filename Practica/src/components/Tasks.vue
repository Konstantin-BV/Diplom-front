<template>
  <div>
    <div class="title_task">
      <div style="mar">{{ name }}</div>
      <div @click="open = !open" class="Text_Name title_task">
        {{ task_title }}
        <div v-if="ddd == 2">
          <img style="height: 30px" src="../assets/check2.svg" />
        </div>
        <div v-if="ddd == 1" class="bi bi-question-lg">
          <img style="height: 30px" src="../assets/question-lg.svg" />
        </div>
        <div v-if="ddd == 0" class="bi bi-x-lg">
          <img style="height: 30px" src="../assets/x-lg.svg" />
        </div>
      </div>
      <div>{{ time }}</div>
    </div>
    <div>
      <div v-if="open">
        <div class="Condition_Text">
          <div class="Text_Task"></div>
        </div>
        <div class="Main_div_con4">
          <div>
            <OneTask
              v-for="(item, id) in children"
              v-bind="item"
              :key="id"
              class="Main_div_con8"
              style="border-radius: 15px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OneTask from "../components/one_task.vue";
export default {
  name: "center-menu",
  components: { OneTask },
  props: {
    main_text: {
      type: String,
      default: null,
      required: true,
    },
    task_title: {
      type: String,
      default: null,
      required: true,
    },
    task_id: {
      type: Number,
      default: null,
      required: true,
    },
    children: {
      type: Number,
      default: null,
      required: true,
    },
    status_id: {
      type: Number,
      default: null,
      required: true,
    },
    name: {
      type: String,
      default: null,
      required: true,
    },
    time: {
      type: String,
      default: null,
      required: true,
    },
  },
  data: () => ({
    open: false,
    ddd: 1,
    ask: "",
  }),

  created: function () {
    this.ddd = this.status_id;
    console.log(this.ddd);
    console.log(this.status_id);
  },
};
</script>

<style>
.Text_Name {
  font-size: 21pt;
  margin: auto;
}

.Main_div_con8 {
  display: flex;
  justify-self: start;
  flex-direction: column;
  margin: 30px;
  border: 1px solid black;
  padding: 10px;
  border-radius: 15px;
}

.Name_Step {
  font-size: 16pt;
  margin-left: 46%;
}

.Main_div {
  margin: 15px;
}

.Radio_Buttons {
  width: 100px;
}

.Condition_Text {
  display: flex;
  flex: row;
}

.Text_Task {
  margin-left: 15px;
}

.Ask_Button {
  min-height: 35;
  margin-left: 15px;
  margin-top: 15px;
}

.Text_Ask {
  width: 80%;
  height: 35px;
}

.Button_Text_Ask {
  width: 15%;
  height: 35px;
  margin-left: 10px;
}
</style>
