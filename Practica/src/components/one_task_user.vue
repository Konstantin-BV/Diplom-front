<template>
  <div>
    <div @click="flag = !flag" class="Text_Name title_task">
      Шаг №{{ id }}
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
    <div>
      <div v-if="flag">
        <div class="Condition_Text">
          <div class="Radio_Buttons">
            <input type="radio" value="0" v-model="ddd" />
            <label>Не сделано</label>
            <br />
            <input type="radio" value="1" v-model="ddd" />
            <label>Вопрос</label>
            <br />
            <input type="radio" value="2" v-model="ddd" />
            <label>Сделано</label>
          </div>
          <div class="Text_Task">
            {{ task_title }}
          </div>
        </div>
        <div v-if="ddd == 1" class="Ask_Button">
          <input v-model="ask" placeholder="Введите вопрос" class="Text_Ask" />
          <button class="Button_Text_Ask btn btn-outline-dark">
            Отправить вопрос
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
    task_title: {
      type: String,
      default: null,
      required: true,
    },
    name: {
      type: String,
      default: null,
      required: true,
    },
    id: {
      type: Number,
      default: null,
      required: true,
    },
    status_id: {
      type: Number,
      default: null,
      required: true,
    },
  },
  data: () => ({
    flag: false,
    ddd: 1,
    ask: "",
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
  display: flex;
  flex: row;
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
  width: 920px;
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
