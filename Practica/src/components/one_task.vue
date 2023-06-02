<template>
  <div>
    <div class="title_task">
      <div class="Text_Name">
        <div @click="open = !open" class="Text_Name title_task">
          Шаг №{{ task_id }}
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
      </div>
    </div>
    <div>
      <div v-if="open">
        <div class="Text_Task" style="font-size: 21px">
          {{ task_title }}
        </div>
        <div
          v-for="(item, id) in ask"
          v-bind="item"
          :key="id"
          style="margin: 15px"
        >
          <div
            v-if="item.id_user == 1"
            class="w-100 content_main h-40"
            style="text-align: left"
          >
            <div class="">
              <div style>
                <br />
                {{ item.name }} {{ item.time }}
              </div>
            </div>
            <div class="left_text" style="font-size: 21px">
              {{ item.ask }}
            </div>
          </div>
          <div
            v-if="item.id_user != 1"
            class="w-100 content_main h-40"
            style="text-align: right"
          >
            <div class="">
              <div style>
                <br />
                {{ item.name }} {{ item.time }}
              </div>
            </div>
            <div class="left_text" style="font-size: 21px">
              {{ item.ask }}
            </div>
          </div>
        </div>
        <div v-if="ddd == 1" class="Ask_Button">
          <input v-model="ask1" placeholder="Введите вопрос" class="Text_Ask" />
          <button class="Button_Text_Ask btn btn-outline-dark">
            Отправить сообщение
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "center-menu",
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
    status_id: {
      type: Number,
      default: 0,
      required: true,
    },
    ask: {
      type: Array,
      default: null,
      required: true,
    },
  },
  data: () => ({
    open: false,
    ddd: 0,
    ask1: "",
  }),

  created: function () {
    this.ddd = this.status_id;
  },
};
</script>

<style>
.Text_Name {
  font-size: 21pt;
  margin: auto;
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

.left_menu {
  display: flex;
  width: 120px;
}

.Text_Task {
  margin-left: 15px;
}

.Ask_Button {
  min-height: 35;
  margin-left: 15px;
  margin-top: 15px;
}

.title_task {
  display: flex;
  flex: row;
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
